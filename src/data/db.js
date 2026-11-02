export const initialDatabase = {
  // Configuración del usuario principal por defecto (si no existe en localStorage)
  usuarioDefault: {
    id: 1,
    nombre: "prueba",
    email: "prueba@unlam.edu.ar",
    apodo: "LingoMaster",
    idiomaActual: "ingles",
    nivelActual: "inicial",
    leccionActual: {
      nivel: "inicial",
      leccionId: 1,
    },
    liga: "bronce",
    avatar: "../img/logo-lingo.svg",
  },

  // Estructura de Cursos, Niveles y Lecciones
  cursos: {
    ingles: {
      nombre: "Inglés",
      icono: "../img/ingles.svg",
      niveles: {
        inicial: [
          {
            id: 1,
            titulo: "Saludos y Presentaciones",
            preguntas: [
              {
                id: 101,
                pregunta: "Traduce: 'Buenos días, ¿cómo estás?'",
                opciones: [
                  "Good morning, how are you?",
                  "Good night, who are you?",
                  "Hello, goodbye.",
                ],
                respuestaCorrecta: "Good morning, how are you?",
              },
              {
                id: 102,
                pregunta: "Traduce: 'Mi nombre es Carlos.'",
                opciones: [
                  "Your name is Carlos.",
                  "My name is Carlos.",
                  "He is Carlos.",
                ],
                respuestaCorrecta: "My name is Carlos.",
              },
              {
                id: 103,
                pregunta: "Traduce: 'Mucho gusto.'",
                opciones: ["See you later.", "Nice to meet you.", "Thank you."],
                respuestaCorrecta: "Nice to meet you.",
              },
            ],
          },
          {
            id: 2,
            titulo: "Números y Colores",
            preguntas: [
              {
                id: 104,
                pregunta: "Traduce: 'El auto rojo'",
                opciones: ["The red car", "The blue house", "A red dog"],
                respuestaCorrecta: "The red car",
              },
              {
                id: 105,
                pregunta: "Traduce: 'Tengo diez años.'",
                opciones: [
                  "I have five years.",
                  "I am ten years old.",
                  "You have ten books.",
                ],
                respuestaCorrecta: "I am ten years old.",
              },
              {
                id: 106,
                pregunta: "Traduce: 'El cielo azul'",
                opciones: ["The green sky", "The blue sky", "The dark night"],
                respuestaCorrecta: "The blue sky",
              },
            ],
          },
          {
            id: 3,
            titulo: "La Familia",
            preguntas: [
              {
                id: 107,
                pregunta: "Traduce: 'Mi madre y mi padre'",
                opciones: [
                  "My mother and my father",
                  "My brother and sister",
                  "My aunt and uncle",
                ],
                respuestaCorrecta: "My mother and my father",
              },
              {
                id: 108,
                pregunta: "Traduce: 'Tengo un hermano menor.'",
                opciones: [
                  "I have an older sister.",
                  "I have a younger brother.",
                  "He is my cousin.",
                ],
                respuestaCorrecta: "I have a younger brother.",
              },
              {
                id: 109,
                pregunta: "Traduce: 'Nuestra familia es grande.'",
                opciones: [
                  "Our family is big.",
                  "Your house is small.",
                  "Their dog is friendly.",
                ],
                respuestaCorrecta: "Our family is big.",
              },
            ],
          },
        ],
        medio: [
          {
            id: 4,
            titulo: "Trabajo y Rutina",
            preguntas: [
              {
                id: 110,
                pregunta: "Traduce: 'Trabajo en una oficina.'",
                opciones: [
                  "I work in an office.",
                  "I live in a house.",
                  "I study at university.",
                ],
                respuestaCorrecta: "I work in an office.",
              },
              {
                id: 111,
                pregunta: "Traduce: 'Desayuno a las ocho.'",
                opciones: [
                  "I sleep at eight.",
                  "I have breakfast at eight.",
                  "I work all day.",
                ],
                respuestaCorrecta: "I have breakfast at eight.",
              },
              {
                id: 112,
                pregunta: "Traduce: '¿A qué hora viajas?'",
                opciones: [
                  "What time do you travel?",
                  "Where do you live?",
                  "How much is this?",
                ],
                respuestaCorrecta: "What time do you travel?",
              },
            ],
          },
          {
            id: 5,
            titulo: "Viajes y Turismo",
            preguntas: [
              {
                id: 113,
                pregunta: "Traduce: 'Necesito un boleto a Londres.'",
                opciones: [
                  "I need a ticket to London.",
                  "Where is the hotel?",
                  "Can I have water?",
                ],
                respuestaCorrecta: "I need a ticket to London.",
              },
              {
                id: 114,
                pregunta: "Traduce: '¿Cuánto cuesta esta habitación?'",
                opciones: [
                  "How much is this room?",
                  "Is the airport far?",
                  "Do you take credit cards?",
                ],
                respuestaCorrecta: "How much is this room?",
              },
              {
                id: 115,
                pregunta: "Traduce: 'El vuelo está retrasado.'",
                opciones: [
                  "The flight is delayed.",
                  "The train arrived early.",
                  "My luggage is lost.",
                ],
                respuestaCorrecta: "The flight is delayed.",
              },
            ],
          },
          {
            id: 6,
            titulo: "Pasado Simple",
            preguntas: [
              {
                id: 116,
                pregunta: "Traduce: 'Ayer fui al cine con amigos.'",
                opciones: [
                  "Yesterday I went to the cinema with friends.",
                  "Tomorrow I will go shopping.",
                  "I stay at home today.",
                ],
                respuestaCorrecta:
                  "Yesterday I went to the cinema with friends.",
              },
              {
                id: 117,
                pregunta: "Traduce: 'Ella compró un libro nuevo.'",
                opciones: [
                  "She sold an old book.",
                  "She bought a new book.",
                  "She reads every night.",
                ],
                respuestaCorrecta: "She bought a new book.",
              },
              {
                id: 118,
                pregunta: "Traduce: 'No comimos pizza anoche.'",
                opciones: [
                  "We didn't eat pizza last night.",
                  "We love eating pizza.",
                  "They cooked chicken.",
                ],
                respuestaCorrecta: "We didn't eat pizza last night.",
              },
            ],
          },
        ],
        avanzado: [
          {
            id: 7,
            titulo: "Negocios y Contratos",
            preguntas: [
              {
                id: 119,
                pregunta: "Traduce: 'Debemos firmar el acuerdo comercial.'",
                opciones: [
                  "We must sign the trade agreement.",
                  "The meeting is canceled.",
                  "Profit margins are low.",
                ],
                respuestaCorrecta: "We must sign the trade agreement.",
              },
              {
                id: 120,
                pregunta: "Traduce: 'El presupuesto fue aprobado.'",
                opciones: [
                  "The budget was approved.",
                  "Expenses increased rapidly.",
                  "The project failed.",
                ],
                respuestaCorrecta: "The budget was approved.",
              },
              {
                id: 121,
                pregunta: "Traduce: 'Buscamos nuevos inversores.'",
                opciones: [
                  "We are looking for new investors.",
                  "Employees want a raise.",
                  "Clients are satisfied.",
                ],
                respuestaCorrecta: "We are looking for new investors.",
              },
            ],
          },
          {
            id: 8,
            titulo: "Discursos Formales",
            preguntas: [
              {
                id: 122,
                pregunta:
                  "Traduce: 'En conclusión, los resultados son óptimos.'",
                opciones: [
                  "In conclusion, the results are optimal.",
                  "However, problems persist.",
                  "First of all, welcome.",
                ],
                respuestaCorrecta: "In conclusion, the results are optimal.",
              },
              {
                id: 123,
                pregunta: "Traduce: 'Agradezco su valiosa colaboración.'",
                opciones: [
                  "I appreciate your valuable collaboration.",
                  "Sorry for the delay.",
                  "Have a nice day.",
                ],
                respuestaCorrecta: "I appreciate your valuable collaboration.",
              },
              {
                id: 124,
                pregunta: "Traduce: 'Se requiere una auditoría estricta.'",
                opciones: [
                  "A strict audit is required.",
                  "Funds were transferred.",
                  "Rules are flexible.",
                ],
                respuestaCorrecta: "A strict audit is required.",
              },
            ],
          },
          {
            id: 9,
            titulo: "Debates y Opiniones",
            preguntas: [
              {
                id: 125,
                pregunta:
                  "Traduce: 'Desde mi perspectiva, la tecnología ayuda.'",
                opciones: [
                  "From my perspective, technology helps.",
                  "Everyone disagrees completely.",
                  "It is impossible to know.",
                ],
                respuestaCorrecta: "From my perspective, technology helps.",
              },
              {
                id: 126,
                pregunta: "Traduce: 'Existen argumentos sólidos a favor.'",
                opciones: [
                  "There are solid arguments in favor.",
                  "Nobody cares about this.",
                  "Questions are irrelevant.",
                ],
                respuestaCorrecta: "There are solid arguments in favor.",
              },
              {
                id: 127,
                pregunta: "Traduce: 'Debemos evaluar todas las consecuencias.'",
                opciones: [
                  "We must evaluate all consequences.",
                  "Ignore previous reports.",
                  "Success is guaranteed.",
                ],
                respuestaCorrecta: "We must evaluate all consequences.",
              },
            ],
          },
        ],
      },
    },
    aleman: {
      nombre: "Alemán",
      icono: "../img/aleman.svg",
      niveles: {
        inicial: [
          {
            id: 1,
            titulo: "Begrüßung (Saludos)",
            preguntas: [
              {
                id: 201,
                pregunta: "Traduce: 'Hola, ¿cómo estás?'",
                opciones: [
                  "Hallo, wie geht es dir?",
                  "Guten Tag, wer bist du?",
                  "Tschüss, bis bald.",
                ],
                respuestaCorrecta: "Hallo, wie geht es dir?",
              },
              {
                id: 202,
                pregunta: "Traduce: 'Buenos días.'",
                opciones: ["Guten Morgen.", "Guten Abend.", "Gute Nacht."],
                respuestaCorrecta: "Guten Morgen.",
              },
              {
                id: 203,
                pregunta: "Traduce: 'Me llamo Hans.'",
                opciones: [
                  "Ich heiße Hans.",
                  "Du bist Hans.",
                  "Er kommt aus Berlin.",
                ],
                respuestaCorrecta: "Ich heiße Hans.",
              },
            ],
          },
          {
            id: 2,
            titulo: "Zahlen (Números)",
            preguntas: [
              {
                id: 204,
                pregunta: "Traduce el número: 'Eins, zwei, drei'",
                opciones: [
                  "Uno, dos, tres",
                  "Diez, veinte, treinta",
                  "Cinco, seis, siete",
                ],
                respuestaCorrecta: "Uno, dos, tres",
              },
              {
                id: 205,
                pregunta: "Traduce: 'Tengo diez euros.'",
                opciones: [
                  "Ich habe zehn Euro.",
                  "Du hast viel Geld.",
                  "Wir kaufen ein Auto.",
                ],
                respuestaCorrecta: "Ich habe zehn Euro.",
              },
              {
                id: 206,
                pregunta: "Traduce el número: 'Zehn'",
                opciones: ["Diez", "Cien", "Mil"],
                respuestaCorrecta: "Diez",
              },
            ],
          },
          {
            id: 3,
            titulo: "Familie (Familia)",
            preguntas: [
              {
                id: 207,
                pregunta: "Traduce: 'Mi padre y mi madre'",
                opciones: [
                  "Mein Vater und meine Mutter",
                  "Dein Bruder und Schwester",
                  "Die Grosseltern",
                ],
                respuestaCorrecta: "Mein Vater und meine Mutter",
              },
              {
                id: 208,
                pregunta: "Traduce: 'Tengo una hermana.'",
                opciones: [
                  "Ich habe eine Schwester.",
                  "Er hat einen Hund.",
                  "Wir wohnen hier.",
                ],
                respuestaCorrecta: "Ich have eine Schwester.",
              },
              {
                id: 209,
                pregunta: "Traduce: 'Nuestra familia'",
                opciones: ["Unsere Familie", "Eure Freunde", "Das Kind"],
                respuestaCorrecta: "Unsere Familie",
              },
            ],
          },
        ],
        medio: [
          {
            id: 4,
            titulo: "Alltag (Rutina diaria)",
            preguntas: [
              {
                id: 210,
                pregunta: "Traduce: 'Trabajo en Berlín.'",
                opciones: [
                  "Ich arbeite in Berlin.",
                  "Ich wohne in München.",
                  "Ich lerne Deutsch.",
                ],
                respuestaCorrecta: "Ich arbeite in Berlin.",
              },
              {
                id: 211,
                pregunta: "Traduce: 'Bebo café por la mañana.'",
                opciones: [
                  "Ich trinke morgens Kaffee.",
                  "Du isst gerne Brot.",
                  "Wir kochen Abendessen.",
                ],
                respuestaCorrecta: "Ich trinke morgens Kaffee.",
              },
              {
                id: 212,
                pregunta: "¿Qué hora es?",
                opciones: [
                  "Wie viel Uhr ist es?",
                  "Wo ist der Bahnhof?",
                  "Wie viel kostet das?",
                ],
                respuestaCorrecta: "Wie viel Uhr ist es?",
              },
            ],
          },
          {
            id: 5,
            titulo: "Reisen (Viajes)",
            preguntas: [
              {
                id: 213,
                pregunta: "Traduce: '¿Dónde está la estación?'",
                opciones: [
                  "Wo ist der Bahnhof?",
                  "Wohin reist du?",
                  "Gibt es ein Hotel?",
                ],
                respuestaCorrecta: "Wo ist der Bahnhof?",
              },
              {
                id: 214,
                pregunta: "Traduce: 'Un billete a Múnich, por favor.'",
                opciones: [
                  "Eine Fahrkarte nach München, bitte.",
                  "Ein Bier, bitte.",
                  "Das Zimmer ist frei.",
                ],
                respuestaCorrecta: "Eine Fahrkarte nach München, bitte.",
              },
              {
                id: 215,
                pregunta: "Traduce: 'El tren sale tarde.'",
                opciones: [
                  "Der Zug fährt spät ab.",
                  "Das Flugzeug landet.",
                  "Das Auto ist schnell.",
                ],
                respuestaCorrecta: "Der Zug fährt spät ab.",
              },
            ],
          },
          {
            id: 6,
            titulo: "Vergangenheit (Pasado)",
            preguntas: [
              {
                id: 216,
                pregunta: "Traduce: 'Ayer leí un libro.'",
                opciones: [
                  "Gestern habe ich ein Buch gelesen.",
                  "Morgen lese ich eine Zeitung.",
                  "Ich schlafe jetzt.",
                ],
                respuestaCorrecta: "Gestern habe ich ein Buch gelesen.",
              },
              {
                id: 217,
                pregunta: "Traduce: 'Comimos en un restaurante.'",
                opciones: [
                  "Wir haben in einem Restaurant gegessen.",
                  "Sie trinken Wasser.",
                  "Er kocht zu Hause.",
                ],
                respuestaCorrecta: "Wir haben in einem Restaurant gegessen.",
              },
              {
                id: 218,
                pregunta: "Traduce: 'Viajé a Alemania.'",
                opciones: [
                  "Ich bin nach Deutschland gereist.",
                  "Du bleibst in Wien.",
                  "Wir fliegen nach Spanien.",
                ],
                respuestaCorrecta: "Ich bin nach Deutschland gereist.",
              },
            ],
          },
        ],
        avanzado: [
          {
            id: 7,
            titulo: "Wirtschaft (Economía)",
            preguntas: [
              {
                id: 219,
                pregunta: "Traduce: 'Das Unternehmen steigert den Gewinn.'",
                opciones: [
                  "La empresa aumenta los beneficios.",
                  "Los costos son muy altos.",
                  "El mercado está cerrado.",
                ],
                respuestaCorrecta: "La empresa aumenta los beneficios.",
              },
              {
                id: 220,
                pregunta: "Traduce: 'Wir verhandeln den neuen Vertrag.'",
                opciones: [
                  "Negociamos el nuevo contrato.",
                  "Firmamos el acuerdo hoy.",
                  "Cancelamos el proyecto.",
                ],
                respuestaCorrecta: "Negociamos el nuevo contrato.",
              },
              {
                id: 221,
                pregunta: "Traduce: 'Die Inflation sinkt leicht.'",
                opciones: [
                  "La inflación baja ligeramente.",
                  "Los precios suben rápido.",
                  "El desempleo aumenta.",
                ],
                respuestaCorrecta: "La inflación baja ligeramente.",
              },
            ],
          },
          {
            id: 8,
            titulo: "Literatur (Literatura)",
            preguntas: [
              {
                id: 222,
                pregunta: "Traduce: 'Das Werk reflektiert die Epoche.'",
                opciones: [
                  "La obra refleja la época.",
                  "El autor escribe poemas.",
                  "La novela es muy larga.",
                ],
                respuestaCorrecta: "La obra refleja la época.",
              },
              {
                id: 223,
                pregunta: "Traduce: 'Eine komplexe Metapher'",
                opciones: [
                  "Una metáfora compleja",
                  "Un estilo simple",
                  "Un poema romántico",
                ],
                respuestaCorrecta: "Una metáfora compleja",
              },
              {
                id: 224,
                pregunta: "Traduce: 'Kritische Analyse des Textes'",
                opciones: [
                  "Análisis crítico del texto",
                  "Lectura rápida del libro",
                  "Resumen de la historia",
                ],
                respuestaCorrecta: "Análisis crítico del texto",
              },
            ],
          },
          {
            id: 9,
            titulo: "Wissenschaft (Ciencia)",
            preguntas: [
              {
                id: 225,
                pregunta: "Traduce: 'Die Hypothese wurde bewiesen.'",
                opciones: [
                  "La hipótesis fue probada.",
                  "El experimento falló.",
                  "Nuevos datos llegaron.",
                ],
                respuestaCorrecta: "La hipótesis fue probada.",
              },
              {
                id: 226,
                pregunta: "Traduce: 'Fortschritte in der Technologie'",
                opciones: [
                  "Avances en la tecnología",
                  "Problemas de energía",
                  "Investigación básica",
                ],
                respuestaCorrecta: "Avances en la tecnología",
              },
              {
                id: 227,
                pregunta: "Traduce: 'Interdisziplinäre Forschung'",
                opciones: [
                  "Investigación interdisciplinaria",
                  "Laboratorio químico",
                  "Estudio estadístico",
                ],
                respuestaCorrecta: "Investigación interdisciplinaria",
              },
            ],
          },
        ],
      },
    },
    chino: {
      nombre: "Chino",
      icono: "../img/chino.svg",
      niveles: {
        inicial: [
          {
            id: 1,
            titulo: "问候 (Saludos)",
            preguntas: [
              {
                id: 301,
                pregunta: "Traduce: 'Nǐ hǎo' (你好)",
                opciones: ["Hola", "Adiós", "Gracias"],
                respuestaCorrecta: "Hola",
              },
              {
                id: 302,
                pregunta: "Traduce: 'Zàijiàn' (再见)",
                opciones: ["Hola", "Adiós", "Por favor"],
                respuestaCorrecta: "Adiós",
              },
              {
                id: 303,
                pregunta: "Traduce: 'Xièxie' (谢谢)",
                opciones: ["De nada", "Gracias", "Buenos días"],
                respuestaCorrecta: "Gracias",
              },
            ],
          },
          {
            id: 2,
            titulo: "数字 (Números)",
            preguntas: [
              {
                id: 304,
                pregunta: "Traduce: 'Yī, èr, sān' (一二三)",
                opciones: [
                  "Uno, dos, tres",
                  "Cuatro, cinco, seis",
                  "Diez, cien, mil",
                ],
                respuestaCorrecta: "Uno, dos, tres",
              },
              {
                id: 305,
                pregunta: "Traduce: 'Shí' (十)",
                opciones: ["Diez", "Cero", "Ocho"],
                respuestaCorrecta: "Diez",
              },
              {
                id: 306,
                pregunta: "Traduce: 'Wǒ yǒu shí kuài' (我有十块)",
                opciones: [
                  "Tengo diez yuanes",
                  "Tengo diez años",
                  "Compro diez libros",
                ],
                respuestaCorrecta: "Tengo diez yuanes",
              },
            ],
          },
          {
            id: 3,
            titulo: "家庭 (Familia)",
            preguntas: [
              {
                id: 307,
                pregunta: "Traduce: 'Bàba hé māma' (爸爸和妈妈)",
                opciones: [
                  "Papá y mamá",
                  "Hermano y hermana",
                  "Abuelo y abuela",
                ],
                respuestaCorrecta: "Papá y mamá",
              },
              {
                id: 308,
                pregunta: "Traduce: 'Wǒ de jiātíng' (我的家庭)",
                opciones: ["Mi familia", "Tu casa", "Sus amigos"],
                respuestaCorrecta: "Mi familia",
              },
              {
                id: 309,
                pregunta: "Traduce: 'Gēge' (哥哥)",
                opciones: ["Hermano mayor", "Hermano menor", "Tío"],
                respuestaCorrecta: "Hermano mayor",
              },
            ],
          },
        ],
        medio: [
          {
            id: 4,
            titulo: "工作 (Trabajo)",
            preguntas: [
              {
                id: 310,
                pregunta:
                  "Traduce: 'Wǒ zài bàngōngshì gōngzuò' (我在办公室工作)",
                opciones: [
                  "Trabajo en una oficina",
                  "Estudio en la escuela",
                  "Duermo en casa",
                ],
                respuestaCorrecta: "Trabajo en una oficina",
              },
              {
                id: 311,
                pregunta: "Traduce: 'Nǐ hē chá ma?' (你喝茶吗)",
                opciones: ["¿Bebes té?", "¿Comes arroz?", "¿Viajas hoy?"],
                respuestaCorrecta: "¿Bebes té?",
              },
              {
                id: 312,
                pregunta: "Traduce: 'Jǐ diǎn le?' (几点了)",
                opciones: ["¿Qué hora es?", "¿Dónde estás?", "¿Cuánto cuesta?"],
                respuestaCorrecta: "¿Qué hora es?",
              },
            ],
          },
          {
            id: 5,
            titulo: "旅游 (Viajes)",
            preguntas: [
              {
                id: 313,
                pregunta: "Traduce: 'Qù Běijīng de piào' (去北京的票)",
                opciones: [
                  "Un boleto a Pekín",
                  "Un hotel en Shanghái",
                  "El mapa de la ciudad",
                ],
                respuestaCorrecta: "Un boleto a Pekín",
              },
              {
                id: 314,
                pregunta: "Traduce: 'Fēijī zhǔnshí qǐfēi' (飞机准时起飞)",
                opciones: [
                  "El avión despega a tiempo",
                  "El tren se retrasó",
                  "El viaje es largo",
                ],
                respuestaCorrecta: "El avión despega a tiempo",
              },
              {
                id: 315,
                pregunta:
                  "Traduce: 'Zhèige fángjiān duōshǎo qián?' (这个房间多少钱)",
                opciones: [
                  "¿Cuánto cuesta esta habitación?",
                  "¿Dónde está el baño?",
                  "¿Hay Wi-Fi gratis?",
                ],
                respuestaCorrecta: "¿Cuánto cuesta esta habitación?",
              },
            ],
          },
          {
            id: 6,
            titulo: "过去 (Pasado)",
            preguntas: [
              {
                id: 316,
                pregunta: "Traduce: 'Wǒ zuótiān kàn le shū' (我昨天看了书)",
                opciones: [
                  "Ayer leí un libro",
                  "Mañana compraré ropa",
                  "Hoy descanso",
                ],
                respuestaCorrecta: "Ayer leí un libro",
              },
              {
                id: 317,
                pregunta: 'Traduce: "Tāmen chīle mǐfàn" (他们吃了米饭)',
                opciones: ["Comieron arroz", "Bebieron agua", "Fueron al cine"],
                respuestaCorrecta: "Comieron arroz",
              },
              {
                id: 318,
                pregunta: "Traduce: 'Wǒ qùguò Zhōngguó' (我去过中国)",
                opciones: [
                  "He estado en China",
                  "Quiero ir a China",
                  "Vivo en China",
                ],
                respuestaCorrecta: "He estado en China",
              },
            ],
          },
        ],
        avanzado: [
          {
            id: 7,
            titulo: "商业 (Negocios)",
            preguntas: [
              {
                id: 319,
                pregunta: "Traduce: 'Qiānshǔ hétóng' (签署合同)",
                opciones: [
                  "Firmar el contrato",
                  "Cancelar el pedido",
                  "Revisar cuentas",
                ],
                respuestaCorrecta: "Firmar el contrato",
              },
              {
                id: 320,
                pregunta: "Traduce: 'Yùsuàn yǐjīng pīzhǔn' (预算已经批准)",
                opciones: [
                  "El presupuesto fue aprobado",
                  "Las ganancias cayeron",
                  "Nuevos socios llegaron",
                ],
                respuestaCorrecta: "El presupuesto fue aprobado",
              },
              {
                id: 321,
                pregunta: "Traduce: 'tóuzī zhèngcè' (投资政策)",
                opciones: [
                  "Política de inversión",
                  "Estrategia de ventas",
                  "Costo laboral",
                ],
                respuestaCorrecta: "Política de inversión",
              },
            ],
          },
          {
            id: 8,
            titulo: "文学 (Literatura)",
            preguntas: [
              {
                id: 322,
                pregunta: "Traduce: 'Gǔdiǎn shīcí' (古典诗词)",
                opciones: [
                  "Poesía clásica",
                  "Novela moderna",
                  "Ensayo histórico",
                ],
                respuestaCorrecta: "Poesía clásica",
              },
              {
                id: 323,
                pregunta: "Traduce: 'Wénxué zuòpǐn' (文学作品)",
                opciones: [
                  "Obras literarias",
                  "Artículos de prensa",
                  "Guiones de cine",
                ],
                respuestaCorrecta: "Obras literarias",
              },
              {
                id: 324,
                pregunta: "Traduce: 'Shēnkè de yìyì' (深刻的意义)",
                opciones: [
                  "Significado profundo",
                  "Estilo sencillo",
                  "Trama confusa",
                ],
                respuestaCorrecta: "Significado profundo",
              },
            ],
          },
          {
            id: 9,
            titulo: "科技 (Ciencia y Tech)",
            preguntas: [
              {
                id: 325,
                pregunta: "Traduce: 'Rénōng zhìnéng' (人工智能)",
                opciones: [
                  "Inteligencia artificial",
                  "Redes sociales",
                  "Sistemas operativos",
                ],
                respuestaCorrecta: "Inteligencia artificial",
              },
              {
                id: 326,
                pregunta: "Traduce: 'Dà shùjù fēnxī' (大数据分析)",
                opciones: [
                  "Análisis de big data",
                  "Seguridad informática",
                  "Almacenamiento en nube",
                ],
                respuestaCorrecta: "Análisis de big data",
              },
              {
                id: 327,
                pregunta: "Traduce: 'Kēxué yánjiū' (科学研究)",
                opciones: [
                  "Investigación científica",
                  "Desarrollo de software",
                  "Pruebas de laboratorio",
                ],
                respuestaCorrecta: "Investigación científica",
              },
            ],
          },
        ],
      },
    },
    portugues: {
      nombre: "Portugués",
      icono: "../img/liga.svg",
      niveles: {
        inicial: [
          {
            id: 1,
            titulo: "Saudações",
            preguntas: [
              {
                id: 401,
                pregunta: "Traduce: 'Bom dia, tudo bem?'",
                opciones: [
                  "Buenos días, ¿todo bien?",
                  "Buenas noches, ¿cómo estás?",
                  "Hola, adiós.",
                ],
                respuestaCorrecta: "Buenos días, ¿todo bien?",
              },
              {
                id: 402,
                pregunta: "Traduce: 'Meu nome é Ana.'",
                opciones: [
                  "Mi nombre es Ana.",
                  "Tu nombre es Ana.",
                  "Ella es Ana.",
                ],
                respuestaCorrecta: "Mi nombre es Ana.",
              },
              {
                id: 403,
                pregunta: "Traduce: 'Muito prazer.'",
                opciones: ["Mucho gusto.", "Hasta luego.", "Gracias."],
                respuestaCorrecta: "Mucho gusto.",
              },
            ],
          },
          {
            id: 2,
            titulo: "Números e Cores",
            preguntas: [
              {
                id: 404,
                pregunta: "Traduce: 'O carro vermelho'",
                opciones: ["El carro rojo", "La casa azul", "El perro negro"],
                respuestaCorrecta: "El carro rojo",
              },
              {
                id: 405,
                pregunta: "Traduce: 'Eu tenho dez anos.'",
                opciones: [
                  "Tengo diez años.",
                  "Tienes diez libros.",
                  "Él tiene diez pesos.",
                ],
                respuestaCorrecta: "Tengo diez años.",
              },
              {
                id: 406,
                pregunta: "Traduce: 'O céu azul'",
                opciones: ["El cielo azul", "El mar verde", "La noche oscura"],
                respuestaCorrecta: "El cielo azul",
              },
            ],
          },
          {
            id: 3,
            titulo: "A Família",
            preguntas: [
              {
                id: 407,
                pregunta: "Traduce: 'Minha mãe e meu pai'",
                opciones: [
                  "Mi madre y mi padre",
                  "Mi hermano y hermana",
                  "Tus tíos",
                ],
                respuestaCorrecta: "Mi madre y mi padre",
              },
              {
                id: 408,
                pregunta: "Traduce: 'Eu tenho um irmão mais novo.'",
                opciones: [
                  "Tengo un hermano menor.",
                  "Tengo una hermana mayor.",
                  "Él es mi primo.",
                ],
                respuestaCorrecta: "Tengo un hermano menor.",
              },
              {
                id: 409,
                pregunta: "Traduce: 'Nossa família é grande.'",
                opciones: [
                  "Nuestra familia es grande.",
                  "Tu casa es pequeña.",
                  "Su perro es amigable.",
                ],
                respuestaCorrecta: "Nuestra familia es grande.",
              },
            ],
          },
        ],
        medio: [
          {
            id: 4,
            titulo: "Trabalho e Rotina",
            preguntas: [
              {
                id: 410,
                pregunta: "Traduce: 'Eu trabalho em um escritório.'",
                opciones: [
                  "Trabajo en una oficina.",
                  "Vivo en una casa.",
                  "Estudio en la universidad.",
                ],
                respuestaCorrecta: "Trabajo en una oficina.",
              },
              {
                id: 411,
                pregunta: "Traduce: 'Eu tomo café às oito.'",
                opciones: [
                  "Desayuno a las ocho.",
                  "Duermo a las ocho.",
                  "Trabajo todo el día.",
                ],
                respuestaCorrecta: "Desayuno a las ocho.",
              },
              {
                id: 412,
                pregunta: "Traduce: 'Que horas são?'",
                opciones: ["¿Qué hora es?", "¿Dónde estás?", "¿Cuánto cuesta?"],
                respuestaCorrecta: "¿Qué hora es?",
              },
            ],
          },
          {
            id: 5,
            titulo: "Viagens",
            preguntas: [
              {
                id: 413,
                pregunta: "Traduce: 'Preciso de uma passagem para Lisboa.'",
                opciones: [
                  "Necesito un pasaje a Lisboa.",
                  "¿Dónde está el hotel?",
                  "¿Puedo tener agua?",
                ],
                respuestaCorrecta: "Necesito un pasaje a Lisboa.",
              },
              {
                id: 414,
                pregunta: "Traduce: 'Quanto custa este quarto?'",
                opciones: [
                  "¿Cuánto cuesta esta habitación?",
                  "¿El aeropuerto está lejos?",
                  "¿Aceptan tarjetas?",
                ],
                respuestaCorrecta: "¿Cuánto cuesta esta habitación?",
              },
              {
                id: 415,
                pregunta: "Traduce: 'O voo está atrasado.'",
                opciones: [
                  "El vuelo está retrasado.",
                  "El tren llegó temprano.",
                  "Mi equipaje se perdió.",
                ],
                respuestaCorrecta: "El vuelo está retrasado.",
              },
            ],
          },
          {
            id: 6,
            titulo: "Passado",
            preguntas: [
              {
                id: 416,
                pregunta: "Traduce: 'Ontem fui ao cinema.'",
                opciones: [
                  "Ayer fui al cine.",
                  "Mañana iré de compras.",
                  "Me quedo en casa hoy.",
                ],
                respuestaCorrecta: "Ayer fui al cine.",
              },
              {
                id: 417,
                pregunta: "Traduce: 'Ela comprou um livro novo.'",
                opciones: [
                  "Ella compró un libro nuevo.",
                  "Ella vendió un libro viejo.",
                  "Ella lee cada noche.",
                ],
                respuestaCorrecta: "Ella compró un libro nuevo.",
              },
              {
                id: 418,
                pregunta: "Traduce: 'Nós não comemos pizza ontem.'",
                opciones: [
                  "No comimos pizza ayer.",
                  "Nos encanta comer pizza.",
                  "Cocinamos pollo.",
                ],
                respuestaCorrecta: "No comimos pizza ayer.",
              },
            ],
          },
        ],
        avanzado: [
          {
            id: 7,
            titulo: "Negócios",
            preguntas: [
              {
                id: 419,
                pregunta: "Traduce: 'Devemos assinar o contrato.'",
                opciones: [
                  "Debemos firmar el contrato.",
                  "La reunión fue cancelada.",
                  "Las ganancias son bajas.",
                ],
                respuestaCorrecta: "Debemos firmar el contrato.",
              },
              {
                id: 420,
                pregunta: "Traduce: 'O orçamento foi aprovado.'",
                opciones: [
                  "El presupuesto fue aprobado.",
                  "Los gastos aumentaron.",
                  "El proyecto fracasó.",
                ],
                respuestaCorrecta: "El presupuesto fue aprobado.",
              },
              {
                id: 421,
                pregunta: "Traduce: 'Buscamos novos investidores.'",
                opciones: [
                  "Buscamos nuevos inversores.",
                  "Los empleados quieren aumento.",
                  "Los clientes están satisfechos.",
                ],
                respuestaCorrecta: "Buscamos nuevos inversores.",
              },
            ],
          },
          {
            id: 8,
            titulo: "Discursos",
            preguntas: [
              {
                id: 422,
                pregunta: "Traduce: 'Em conclusão, os resultados são ótimos.'",
                opciones: [
                  "En conclusión, los resultados son óptimos.",
                  "Sin embargo, los problemas persisten.",
                  "Bienvenidos todos.",
                ],
                respuestaCorrecta: "En conclusión, los resultados son óptimos.",
              },
              {
                id: 423,
                pregunta: "Traduce: 'Agradeço sua valiosa colaboração.'",
                opciones: [
                  "Agradezco su valiosa colaboración.",
                  "Disculpe la demora.",
                  "Que tenga buen día.",
                ],
                respuestaCorrecta: "Agradezco su valiosa colaboración.",
              },
              {
                id: 424,
                pregunta: "Traduce: 'Exige-se auditoria rigorosa.'",
                opciones: [
                  "Se exige una auditoría rigurosa.",
                  "Los fondos fueron transferidos.",
                  "Las reglas son flexibles.",
                ],
                respuestaCorrecta: "Se exige una auditoría rigurosa.",
              },
            ],
          },
          {
            id: 9,
            titulo: "Debates",
            preguntas: [
              {
                id: 425,
                pregunta:
                  "Traduce: 'Na minha perspectiva, a tecnologia ajuda.'",
                opciones: [
                  "Bajo mi perspectiva, la tecnología ayuda.",
                  "Todos están en desacuerdo.",
                  "Es imposible saberlo.",
                ],
                respuestaCorrecta: "Bajo mi perspectiva, la tecnología ayuda.",
              },
              {
                id: 426,
                pregunta: "Traduce: 'Existem argumentos sólidos a favor.'",
                opciones: [
                  "Existen argumentos sólidos a favor.",
                  "A nadie le importa esto.",
                  "Las preguntas son irrelevantes.",
                ],
                respuestaCorrecta: "Existen argumentos sólidos a favor.",
              },
              {
                id: 427,
                pregunta: "Traduce: 'Devemos avaliar todas as consequências.'",
                opciones: [
                  "Debemos evaluar todas las consecuencias.",
                  "Ignoren los reportes previos.",
                  "El éxito está garantizado.",
                ],
                respuestaCorrecta: "Debemos evaluar todas las consecuencias.",
              },
            ],
          },
        ],
      },
    },
    italiano: {
      nombre: "Italiano",
      icono: "../img/ligas.svg",
      niveles: {
        inicial: [
          {
            id: 1,
            titulo: "Saluti",
            preguntas: [
              {
                id: 501,
                pregunta: "Traduce: 'Buongiorno, come stai?'",
                opciones: [
                  "Buenos días, ¿cómo estás?",
                  "Buenas noches, ¿quién eres?",
                  "Hola, adiós.",
                ],
                respuestaCorrecta: "Buenos días, ¿cómo estás?",
              },
              {
                id: 502,
                pregunta: "Traduce: 'Mi chiamo Marco.'",
                opciones: [
                  "Me llamo Marco.",
                  "Tu te llamas Marco.",
                  "Él es Marco.",
                ],
                respuestaCorrecta: "Me llamo Marco.",
              },
              {
                id: 503,
                pregunta: "Traduce: 'Piacere di conoscerti.'",
                opciones: [
                  "Mucho gusto en conocerte.",
                  "Hasta luego.",
                  "Gracias.",
                ],
                respuestaCorrecta: "Mucho gusto en conocerte.",
              },
            ],
          },
          {
            id: 2,
            titulo: "Numeri e Colori",
            preguntas: [
              {
                id: 504,
                pregunta: "Traduce: 'La macchina rossa'",
                opciones: ["El coche rojo", "La casa azul", "El perro negro"],
                respuestaCorrecta: "El coche rojo",
              },
              {
                id: 505,
                pregunta: "Traduce: 'Ho dieci anni.'",
                opciones: [
                  "Tengo diez años.",
                  "Tienes diez libros.",
                  "Él tiene diez euros.",
                ],
                respuestaCorrecta: "Tengo diez años.",
              },
              {
                id: 506,
                pregunta: "Traduce: 'Il cielo blu'",
                opciones: ["El cielo azul", "El mar verde", "La noche oscura"],
                respuestaCorrecta: "El cielo azul",
              },
            ],
          },
          {
            id: 3,
            titulo: "La Famiglia",
            preguntas: [
              {
                id: 507,
                pregunta: "Traduce: 'Mia madre e mio padre'",
                opciones: [
                  "Mi madre y mi padre",
                  "Mi hermano y hermana",
                  "Tus tíos",
                ],
                respuestaCorrecta: "Mi madre y mi padre",
              },
              {
                id: 508,
                pregunta: "Traduce: 'Ho un fratello minore.'",
                opciones: [
                  "Tengo un hermano menor.",
                  "Tengo una hermana mayor.",
                  "Él es mi primo.",
                ],
                respuestaCorrecta: "Tengo un hermano menor.",
              },
              {
                id: 509,
                pregunta: "Traduce: 'La nostra famiglia è grande.'",
                opciones: [
                  "Nuestra familia es grande.",
                  "Tu casa es pequeña.",
                  "Su perro es amigable.",
                ],
                respuestaCorrecta: "Nuestra familia es grande.",
              },
            ],
          },
        ],
        medio: [
          {
            id: 4,
            titulo: "Lavoro e Routine",
            preguntas: [
              {
                id: 510,
                pregunta: "Traduce: 'Lavoro in un ufficio.'",
                opciones: [
                  "Trabajo en una oficina.",
                  "Vivo en una casa.",
                  "Estudio en la universidad.",
                ],
                respuestaCorrecta: "Trabajo en una oficina.",
              },
              {
                id: 511,
                pregunta: "Traduce: 'Faccio colazione alle otto.'",
                opciones: [
                  "Desayuno a las ocho.",
                  "Duermo a las ocho.",
                  "Trabajo todo el día.",
                ],
                respuestaCorrecta: "Desayuno a las ocho.",
              },
              {
                id: 512,
                pregunta: "Traduce: 'Che ora è?'",
                opciones: ["¿Qué hora es?", "¿Dónde estás?", "¿Cuánto cuesta?"],
                respuestaCorrecta: "¿Qué hora es?",
              },
            ],
          },
          {
            id: 5,
            titulo: "Viaggi",
            preguntas: [
              {
                id: 513,
                pregunta: "Traduce: 'Ho bisogno di un biglietto per Roma.'",
                opciones: [
                  "Necesito un boleto para Roma.",
                  "¿Dónde está el hotel?",
                  "¿Puedo tener agua?",
                ],
                respuestaCorrecta: "Necesito un boleto para Roma.",
              },
              {
                id: 514,
                pregunta: "Traduce: 'Quanto costa questa camera?'",
                opciones: [
                  "¿Cuánto cuesta esta habitación?",
                  "¿El aeropuerto está lejos?",
                  "¿Aceptan tarjetas?",
                ],
                respuestaCorrecta: "¿Cuánto cuesta esta habitación?",
              },
              {
                id: 515,
                pregunta: "Traduce: 'Il volo è in ritardo.'",
                opciones: [
                  "El vuelo está retrasado.",
                  "El tren llegó temprano.",
                  "Mi equipaje se perdió.",
                ],
                respuestaCorrecta: "El vuelo está retrasado.",
              },
            ],
          },
          {
            id: 6,
            titulo: "Passato",
            preguntas: [
              {
                id: 516,
                pregunta: "Traduce: 'Ieri sono andato al cinema.'",
                opciones: [
                  "Ayer fui al cine.",
                  "Mañana iré de compras.",
                  "Me quedo en casa hoy.",
                ],
                respuestaCorrecta: "Ayer fui al cine.",
              },
              {
                id: 517,
                pregunta: "Traduce: 'Lei ha comprato un libro nuovo.'",
                opciones: [
                  "Ella compró un libro nuevo.",
                  "Ella vendió un libro viejo.",
                  "Ella lee cada noche.",
                ],
                respuestaCorrecta: "Ella compró un libro nuevo.",
              },
              {
                id: 518,
                pregunta: "Traduce: 'Non abbiamo mangiato pizza ieri.'",
                opciones: [
                  "No comimos pizza ayer.",
                  "Nos encanta comer pizza.",
                  "Cocinamos pollo.",
                ],
                respuestaCorrecta: "No comimos pizza ayer.",
              },
            ],
          },
        ],
        avanzado: [
          {
            id: 7,
            titulo: "Affari",
            preguntas: [
              {
                id: 519,
                pregunta: "Traduce: 'Dobbiamo firmare il contratto.'",
                opciones: [
                  "Debemos firmar el contrato.",
                  "La reunión fue cancelada.",
                  "Las ganancias son bajas.",
                ],
                respuestaCorrecta: "Debemos firmar el contrato.",
              },
              {
                id: 520,
                pregunta: "Traduce: 'Il budget è stato approvato.'",
                opciones: [
                  "El presupuesto fue aprobado.",
                  "Los gastos aumentaron.",
                  "El proyecto fracasó.",
                ],
                respuestaCorrecta: "El presupuesto fue aprobado.",
              },
              {
                id: 521,
                pregunta: "Traduce: 'Cerchiamo nuovi investitori.'",
                opciones: [
                  "Buscamos nuevos inversores.",
                  "Los empleados quieren aumento.",
                  "Los clientes están satisfechos.",
                ],
                respuestaCorrecta: "Buscamos nuevos inversores.",
              },
            ],
          },
          {
            id: 8,
            titulo: "Discorsi",
            preguntas: [
              {
                id: 522,
                pregunta:
                  "Traduce: 'In conclusione, i risultati sono ottimali.'",
                opciones: [
                  "En conclusión, los resultados son óptimos.",
                  "Sin embargo, los problemas persisten.",
                  "Bienvenidos todos.",
                ],
                respuestaCorrecta: "En conclusión, los resultados son óptimos.",
              },
              {
                id: 523,
                pregunta:
                  "Traduce: 'Apprezzo la vostra preziosa collaborazione.'",
                opciones: [
                  "Aprecio su valiosa colaboración.",
                  "Disculpe la demora.",
                  "Que tenga buen día.",
                ],
                respuestaCorrecta: "Aprecio su valiosa colaboración.",
              },
              {
                id: 524,
                pregunta: "Traduce: 'È richiesta un'attenta verifica.'",
                opciones: [
                  "Se requiere una verificación cuidadosa.",
                  "Los fondos fueron transferidos.",
                  "Las reglas son flexibles.",
                ],
                respuestaCorrecta: "Se requiere una verificación cuidadosa.",
              },
            ],
          },
          {
            id: 9,
            titulo: "Dibattiti",
            preguntas: [
              {
                id: 525,
                pregunta:
                  "Traduce: 'Dal mio punto di vista, la tecnologia aiuta.'",
                opciones: [
                  "Desde mi punto de vista, la tecnología ayuda.",
                  "Todos están en desacuerdo.",
                  "Es imposible saberlo.",
                ],
                respuestaCorrecta:
                  "Desde mi punto de vista, la tecnología ayuda.",
              },
              {
                id: 526,
                pregunta: "Traduce: 'Ci sono argomenti solidi a favore.'",
                opciones: [
                  "Hay argumentos sólidos a favor.",
                  "A nadie le importa esto.",
                  "Las preguntas son irrelevantes.",
                ],
                respuestaCorrecta: "Hay argumentos sólidos a favor.",
              },
              {
                id: 527,
                pregunta: "Traduce: 'Dobbiamo valutare tutte le conseguenze.'",
                opciones: [
                  "Debemos evaluar todas las consecuencias.",
                  "Ignoren los reportes previos.",
                  "El éxito está garantizado.",
                ],
                respuestaCorrecta: "Debemos evaluar todas las consecuencias.",
              },
            ],
          },
        ],
      },
    },
  },

  // 15 Usuarios Mock distribuidos en Ligas (Oro, Plata, Bronce) para las tablas de clasificación
  usuariosMock: [
    {
      id: 2,
      nombre: "Sofía Gómez",
      apodo: "SofiPolyglot",
      xp: 1450,
      liga: "oro",
      nivel: "avanzado",
    },
    {
      id: 3,
      nombre: "Lucas Martínez",
      apodo: "LukiLang",
      xp: 1320,
      liga: "oro",
      nivel: "avanzado",
    },
    {
      id: 4,
      nombre: "Valentina Rossi",
      apodo: "ValeIt",
      xp: 1210,
      liga: "oro",
      nivel: "medio",
    },
    {
      id: 5,
      nombre: "Mateo Fernández",
      apodo: "MatDe",
      xp: 1100,
      liga: "oro",
      nivel: "medio",
    },
    {
      id: 6,
      nombre: "Camila Benítez",
      apodo: "CamiCh",
      xp: 980,
      liga: "oro",
      nivel: "inicial",
    },

    {
      id: 7,
      nombre: "Joaquín López",
      apodo: "JoacoEn",
      xp: 850,
      liga: "plata",
      nivel: "medio",
    },
    {
      id: 8,
      nombre: "Martina Sosa",
      apodo: "MartuFr",
      xp: 790,
      liga: "plata",
      nivel: "medio",
    },
    {
      id: 9,
      nombre: "Agustín Ruiz",
      apodo: "AgusPt",
      xp: 720,
      liga: "plata",
      nivel: "inicial",
    },
    {
      id: 10,
      nombre: "Lucía Torres",
      apodo: "LuciLingo",
      xp: 680,
      liga: "plata",
      nivel: "inicial",
    },
    {
      id: 11,
      nombre: "Tomás Herrera",
      apodo: "TomiTalk",
      xp: 610,
      liga: "plata",
      nivel: "inicial",
    },

    {
      id: 12,
      nombre: "Florencia Castro",
      apodo: "FlorStudent",
      xp: 480,
      liga: "bronce",
      nivel: "inicial",
    },
    {
      id: 13,
      nombre: "Nicolás Acosta",
      apodo: "NicoNew",
      xp: 420,
      liga: "bronce",
      nivel: "inicial",
    },
    {
      id: 14,
      nombre: "Victoria Díaz",
      apodo: "VickyLang",
      xp: 350,
      liga: "bronce",
      nivel: "inicial",
    },
    {
      id: 15,
      nombre: "Ignacio Romero",
      apodo: "NachoIni",
      xp: 290,
      liga: "bronce",
      nivel: "inicial",
    },
  ],
};
