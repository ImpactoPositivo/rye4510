import React from 'react';
import { Play, ClipboardCheck, Users, GraduationCap } from 'lucide-react';

export interface VideoModule {
  title: string;
  vimeoId: string;
  evaluationUrl?: string;
}

export interface TrainingLevel {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  modules: VideoModule[];
  generalEvaluation?: string;
}

export const trainingLevels: TrainingLevel[] = [
  {
    id: '1treinamento',
    title: '1º Treinamento',
    subtitle: 'Módulos Iniciais de Orientação',
    icon: <GraduationCap />,
    generalEvaluation: undefined,
    modules: [
      { title: 'Módulo 1', vimeoId: '923800938?h=e42bdbbae2', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScDWvVsBN6Z47Pr-s2jWBc6Edpz1y7zedcEb4Wa_TdlCbPYDw/viewform' },
      { title: 'Módulo 2', vimeoId: '952676005?h=22e6fa41d8', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeJ8MI9BHW5Plv5BLVUHZn3pNMRqj6x_yyNPbhz1WBU32mJbQ/viewform' },
      { title: 'Módulo 3', vimeoId: '952676236?h=e9f11c66fc', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdeE2d0I_RLcXs_J_Aa-0LoCDT_n-6FI4nFUYcN1ZUjemCTkA/viewform' },
      { title: 'Módulo 4', vimeoId: '952676899?h=626bd1a515', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScy8XUz6iFJmxBryu3vAHcnBT0FxdMbILViylyS2PHnY3BSzQ/viewform' },
      { title: 'Módulo 5', vimeoId: '952677389?h=0f430cdfa0', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfLRCtQLkZWzTxWTNrweKoU7yfPe5tqk0G91Q1-VoSEyepcBA/viewform' },
      { title: 'Módulo 6', vimeoId: '952677736?h=9159588c86', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScwKOlzHf4ChGTobm6Kz2BRbm6iC-KsOZ0Qf49fq4EU_P-jfw/viewform' },
    ]
  },
  {
    id: '2treinamento',
    title: '2º Treinamento',
    subtitle: 'Aprofundamento e Preparação',
    icon: <Users />,
    generalEvaluation: undefined,
    modules: [
      { title: 'Módulo 1', vimeoId: '1018936343?h=f7c2471012', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdbP6rC6fMC6hkOdMV7xMLINlcd-VqnUqro0gIxWJyRC5yVpA/viewform' },
      { title: 'Módulo 2', vimeoId: '1018937125?h=3e642ed62e', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScJ__SyucRs3i2TMlMsS-TigJ8IgTGt0pF2GJeqsY-PGZ3L2g/viewform' },
      { title: 'Módulo 3', vimeoId: '1018937508?h=bc8187480c', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeWtNepPCnLoxfClqhsJ5SGT-f5GA_vMJybzH--YMab4rhONg/viewform' },
      { title: 'Módulo 4', vimeoId: '1018937862?h=29d52dfcd9', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdmMIaS_xq7wBFzGiau8XafCmuOsEqnoFmfoTvc_bM9SGBcYg/viewform' },
    ]
  },
  {
    id: '3treinamento',
    title: '3º Treinamento',
    subtitle: 'Desafios e Simulações',
    icon: <Play />,
    generalEvaluation: "https://docs.google.com/forms/d/e/1FAIpQLScwKOlzHf4ChGTobm6Kz2BRbm6iC-KsOZ0Qf49fq4EU_P-jfw/viewform",
    modules: [
      { title: 'Módulo 1', vimeoId: '1026644988?h=8c02a68f0c' },
      { title: 'Módulo 2', vimeoId: '1026645389?h=75a1f008f9' },
      { title: 'Módulo 3', vimeoId: '1026686317?h=0a4954324d' },
      { title: 'Módulo 4', vimeoId: '1026649413?h=06e0a455d1' },
      { title: 'Módulo 5', vimeoId: '1026651705?h=e0fd2a0ed1' },
      { title: 'Módulo 6', vimeoId: '1026685259?h=83a3a077c1' },
    ]
  },
  {
    id: '4treinamento',
    title: '4º Treinamento',
    subtitle: 'Preparação Final',
    icon: <ClipboardCheck />,
    generalEvaluation: undefined,
    modules: [
      { title: 'Vídeo 1', vimeoId: '1063285901?h=97592e1901' },
      { title: 'Vídeo 2', vimeoId: '1063285974?h=119a84a7c9', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfyOeFCHLdnEonEBxk7w_hwQXZJvb22I41IX8W7u4dWbtI1rg/viewform' },
      { title: 'Vídeo 3', vimeoId: '1063286548?h=2ac377f601', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf_SLMFJCB4F1FQOxQyp5wdbNcevOE6Ejx4bi5G_CadXwGkvg/viewform' },
      { title: 'Vídeo 4', vimeoId: '1063286948?h=8329d5b7ed', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdMpAyplfVkVfXhjtv79edQIP_Qn3Gp-D-JQhnNl9Re4c9CgA/viewform' },
      { title: 'Vídeo 5', vimeoId: '1063287538?h=9c5fad5682', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSf3mmEdlcjp74Up2qcmKHlPktVigjd5MuQaMEx7dcSd7Xcx6Q/viewform' },
      { title: 'Vídeo 6', vimeoId: '1063287858?h=165086b406', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc4tmGM_ecF0phA2hPqtb5_On-aONa4vejk7e_DC8tl80z_5w/viewform' },
      { title: 'Vídeo 7', vimeoId: '1063288250?h=e38211f133', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe0XqK7TsASAU1Aiwp-jE30FDYrraJSEeupQbDyp3ji0YBg6w/viewform' },
      { title: 'Vídeo 8', vimeoId: '1063288592?h=8a74e0a03a', evaluationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdHmRHYdlrTM-VMIrOAPA6ivJeX6j5-OWFNlhvj3bhxeLQAYQ/viewform' },
    ]
  },
  {
    id: 'familias',
    title: 'Para Famílias',
    subtitle: 'Treinamento Exclusivo Anfitriãs',
    icon: <Users />,
    generalEvaluation: "https://docs.google.com/forms/d/e/1FAIpQLSebOAzHq-yfsurFuTTjsiWB9Fo-i8Bi7xsnkpuuBoM4DH6Qvg/viewform",
    modules: [
      { title: 'Introdução - Treinamento de Famílias', vimeoId: '1039971614?h=f895c352f3' },
      { title: 'Módulo 1 - Treinamento de Famílias', vimeoId: '1039971800?h=42bec9608d' },
      { title: 'Módulo 2 - Treinamento de Famílias', vimeoId: '1039972171?h=02643ebecf' },
      { title: 'Módulo 3 - Treinamento de Famílias', vimeoId: '1039972443?h=c4585acfc7' },
      { title: 'Módulo 4 - Treinamento de Famílias', vimeoId: '1039972575?h=a4688338e9' },
      { title: 'Módulo 5 - Treinamento de Famílias', vimeoId: '1039972707?h=1781463b67' },
      { title: 'Módulo 6 - Treinamento de Famílias', vimeoId: '1039972818?h=05fcc79a11' },
      { title: 'Módulo 7 - Treinamento de Famílias', vimeoId: '1039972954?h=d958db6c10' },
      { title: 'Módulo 8 - Treinamento de Famílias', vimeoId: '1039973052?h=bed692d886' },
    ]
  },
];