import type { FaqList } from "./Faq.types";

const FAQ_ITEMS: FaqList = [
  {
    title: "O que é o Portal do Paciente HC e quais são suas funcionalidades?",
    content:
      "O Portal do Paciente do HC é uma plataforma online e aplicativo desenvolvida pelo NETI (Núcleo Especializado em Tecnologia da Informação) do Complexo HCFMUSP que permite aos pacientes acompanhar seu histórico e interagir com os serviços de saúde. Através do portal, é possível consultar resultados de exames (laboratoriais e de imagem), verificar agendas de consulta, solicitar reagendamento de consultas, visualizar e baixar filipeta e preparo de exames, e gerar um QR Code para acesso à catraca no dia da consulta. O portal também oferece a funcionalidade de teleconsulta.",
  },
  {
    title: "Como posso acessar e instalar o aplicativo Portal do Paciente HC?",
    content:
      'Você pode acessar o Portal do Paciente HC através de um navegador web ou baixando o aplicativo em seu smartphone. Para dispositivos Android, o aplicativo está disponível na Google Play Store, e para iPhones e Macs, na App Store. Você pode encontrar os links diretos nas lojas de aplicativos ou escanear o QR Code fornecido no manual com a câmera do seu celular. Para instalar, basta procurar por "portal do paciente hc" na loja de aplicativos e clicar no botão de instalação.',
  },
  {
    title:
      "Como faço para cadastrar uma senha e criar uma conta no Portal do Paciente?",
    content:
      'Antes do primeiro acesso, é necessário cadastrar uma senha. Na tela de acesso, clique no botão "CADASTRAR SENHA". Em seguida, digite somente os números do seu CPF e clique em "LOCALIZAR PACIENTE". O sistema buscará seu registro na base de dados do HCFMUSP. Após encontrar seu registro e confirmar que os dados exibidos (parte do seu nome) estão corretos, você deverá preencher seus dados de contato (que serão usados para comunicação e recuperação de senha) e selecionar a alternativa correta que corresponde ao nome completo da sua mãe e o ano do seu nascimento para verificação. Finalmente, crie e confirme sua senha de acesso e clique em "CADASTRAR SENHA".',
  },
  {
    title:
      "O que preciso ter em mãos ou configurar para participar de uma teleconsulta?",
    content:
      "Para participar de uma teleconsulta através do Portal do Paciente HC, você precisa ter uma teleconsulta agendada, acesso à internet, o aplicativo Portal do Paciente HC instalado e ter se cadastrado na plataforma. É fundamental ter aceito o Termo de Consentimento específico para teleconsulta. Você precisará de um smartphone (preferencialmente com câmera frontal) ou um computador/notebook com webcam e o navegador Google Chrome instalado. Recomenda-se um ambiente bem iluminado e com pouco barulho. Embora o médico tenha acesso ao seu prontuário, é útil ter em mãos sua última receita médica ou resultados de exames relevantes.",
  },
  {
    title: "Como faço para acessar e iniciar uma teleconsulta agendada?",
    content:
      'Após fazer login no Portal do Paciente HC, no menu principal, clique na opção "Teleconsulta". Em seguida, clique na agenda correspondente à sua consulta agendada. No dia e horário da consulta, clique novamente sobre o agendamento. Se for sua primeira teleconsulta, será solicitado que você leia e aceite o Termo de Consentimento clicando em "SIM". Depois de aceitar o termo (ou se já o tiver aceito), clique no botão "Entrar na Teleconsulta". Você será redirecionado para a Sala de Espera e deverá manter o aplicativo aberto enquanto aguarda a entrada do médico.',
  },
  {
    title:
      "O que devo fazer se a minha conexão com a internet falhar durante a teleconsulta?",
    content:
      "Não se preocupe caso sua conexão com a internet seja interrompida durante a teleconsulta. Quando sua internet voltar a funcionar, você poderá entrar novamente no aplicativo ou no site do Portal do Paciente HC para retomar a teleconsulta e retornar à sala com o médico.",
  },
];

export { FAQ_ITEMS };
