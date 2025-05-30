// Dados dos instrutores do curso
import Jose from "/images/jose-200x300.webp";
import Weber from "/images/weber-200x300.webp";
import Rodrigo from "/images/Rodrigo-Jasbick.webp";
import Cleto from "/images/Rodrigo_.webp";
import Ian from "/images/ian.webp";
export const instructors = [
  {
    id: 1,
    name: "Dr. José de Alencar",
    specialty: "Eletrocardiograma",
    bio: "Cardiologista pelo Instituto Dante Pazzanese de Cardiologia (IDPC-SP) e pela Sociedade Brasileira de Cardiologia (SBC) com residência médica em Eletrofisiologia Invasiva implante de Dispositivos Eletrônicos Cardíacos pela Universidade Federal de São Paulo (UNIFESP).",
    // Em produção, substituir por caminho real da imagem
     image: Jose
  },
  {
    id: 2,
    name: "Dr. Weber Tobias",
    specialty: "Medicina de Emergência",
    bio: "Especialista em clínica médica - Titulado pela SBCM. Especialista em medicina de emergência - Titulado pela ABRAMEDE. Instrutor BLS - ACLS - AHA. Preceptor internato em medicina de emergência.",
     image: Weber
  },
  {
    id: 3,
    name: "Dr. Rodrigo Jasbick",
    specialty: "Cardiologia",
    bio: "Cardiologista especialista e titulado pela SBC. Intensivista especialista e titulado pela AMIB. Coordenador técnico da UTI no hospital Jacob Facuri, responsável técnico pela Cárdio Clínica e instrutor do ACLS.",
     image: Rodrigo
  },
  {
    id: 4,
    name: "Dr. Rodrigo Cleto",
    specialty: "Medicina Intensiva",
    bio: "Titulado em Clínica Médica, Cardiologia e Medicina Intensiva. Instrutor do ACLS e BLS pela American Heart Association (AHA), co-fundador da Liberdade Médica Educação, coordenador de Unidade de Terapia Intensiva há mais de 20 anos.",
     image: Cleto
  },
  {
    id: 5,
    name: "Dr. Ian Camilo",
    specialty: "Medicina de Emergência e Cardiologia",
    bio: "Graduado em Medicina pela UFMG. Instrutor do ACLS e BLS pela American Heart Association (AHA). Pós Graduado em Medicina de Emergência e Cardiologia, pelo Hospital Albert Einstein. Diarista na UTI do Hospital Jacob Facuri. Professor Universitário na Disciplina de Urgência e Emergência e Preceptor do internato de Clínica Médica.",
     image: Ian
  }
];

export default instructors;