import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize, SkipForward, SkipBack } from 'lucide-react';

/**
 * Componente de player de vídeo personalizado
 * 
 * @param {Object} props
 * @param {string} props.src - URL do vídeo
 * @param {string} props.poster - URL da imagem de poster (thumbnail)
 * @param {string} props.className - Classes CSS adicionais
 * @param {boolean} props.autoPlay - Se o vídeo deve iniciar automaticamente
 * @param {function} props.onEnded - Função a ser chamada quando o vídeo terminar
 */
const VideoPlayer = ({ 
  src, 
  poster, 
  className = '', 
  autoPlay = false, 
  onEnded = () => {},
  ...props 
}) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hideControlsTimeout, setHideControlsTimeout] = useState(null);

  // Manipuladores de ações
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(e => console.error('Erro ao reproduzir vídeo:', e));
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(e => {
        console.error(`Erro ao entrar em modo fullscreen:`, e);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleProgress = (e) => {
    if (videoRef.current) {
      const video = videoRef.current;
      const progressValue = (video.currentTime / video.duration) * 100;
      setProgress(progressValue);
      setCurrentTime(video.currentTime);
      
      // Se o vídeo terminou, chame o callback onEnded
      if (video.currentTime === video.duration) {
        onEnded();
      }
    }
  };

  const handleSeek = (e) => {
    if (videoRef.current) {
      const seekPos = e.nativeEvent.offsetX / e.target.clientWidth;
      videoRef.current.currentTime = seekPos * videoRef.current.duration;
    }
  };

  const skipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 10; // Avançar 10 segundos
    }
  };

  const skipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime -= 10; // Retroceder 10 segundos
    }
  };

  const showControls = () => {
    setControlsVisible(true);
    
    // Limpar qualquer timeout existente
    if (hideControlsTimeout) {
      clearTimeout(hideControlsTimeout);
    }
    
    // Configurar novo timeout
    const timeout = setTimeout(() => {
      if (isPlaying) {
        setControlsVisible(false);
      }
    }, 3000);
    
    setHideControlsTimeout(timeout);
  };

  // Formatar tempo para exibição
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Event listeners
  useEffect(() => {
    const video = videoRef.current;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleLoadedMetadata = () => setDuration(video.duration);
    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    
    // Adicionar listeners
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('timeupdate', handleProgress);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    
    // Limpar listeners
    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('timeupdate', handleProgress);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      
      if (hideControlsTimeout) {
        clearTimeout(hideControlsTimeout);
      }
    };
  }, [hideControlsTimeout]);

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden rounded-lg bg-black ${className}`}
      onMouseMove={showControls}
      onMouseLeave={() => isPlaying && setControlsVisible(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-auto cursor-pointer"
        onClick={togglePlay}
        autoPlay={autoPlay}
        playsInline
        {...props}
      />
      
      {/* Overlay de controles */}
      <div 
        className={`absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
          controlsVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {/* Botão central de play/pause */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <button 
            className="bg-white/20 backdrop-blur-sm text-white w-16 h-16 rounded-full flex items-center justify-center pointer-events-auto"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause size={32} /> : <Play size={32} fill="white" />}
          </button>
        </div>
        
        {/* Barra de progresso e controles inferiores */}
        <div className="p-4 w-full">
          {/* Barra de progresso */}
          <div 
            className="w-full h-1 bg-white/30 rounded-full cursor-pointer mb-2"
            onClick={handleSeek}
          >
            <div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${progress}%` }}
            />
          </div>
          
          {/* Controles inferiores */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                className="text-white p-1 rounded hover:bg-white/10"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              </button>
              
              <button 
                className="text-white p-1 rounded hover:bg-white/10"
                onClick={skipBackward}
              >
                <SkipBack size={20} />
              </button>
              
              <button 
                className="text-white p-1 rounded hover:bg-white/10"
                onClick={skipForward}
              >
                <SkipForward size={20} />
              </button>
              
              <button 
                className="text-white p-1 rounded hover:bg-white/10"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              
              <span className="text-white text-sm">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            </div>
            
            <button 
              className="text-white p-1 rounded hover:bg-white/10"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;