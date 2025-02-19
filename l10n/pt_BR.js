OC.L10N.register(
    "recognize",
    {
    "Recognize" : "Reconhecer",
    "Smart media tagging for Nextcloud" : "Etiquetamento inteligente de mídia para o Nextcloud",
    "This app goes through your media collection and adds fitting tags, automatically categorizing your photos and music.\n\n* 📷 👪 Recognizes faces from contact photos\n* 📷 🏔 Recognizes animals, landscapes, food, vehicles, buildings and other objects\n* 📷 🗼 Recognizes landmarks and monuments\n* 👂 🎵 Recognizes music genres\n* ⚡ Tagging works via Nextcloud's Collaborative Tags, allowing access by any of your apps\n  * 👂 listen to your tagged music with the audioplayer app\n  * 📷 view your tagged photos with the photos app\n\nAfter installation, you can enable tagging in the admin settings.\n\nRequirements:\n- PHP 7.4 and above\n- App \"collaborative tags\" enabled\n- For native speed:\n  - Processor: x86 64-bit (with support for AVX instructions)\n  - System with glibc (usually the norm on Linux; Alpine linux and FreeBSD are *not* such systems)\n- For sub-native speed (using JavaScript mode)\n  - Processor: x86 64-bit, arm64, armv7l (no AVX needed)\n  - System with glibc or musl (incl. Alpine linux)\n- ~4GB of free RAM (if you're cutting it close, make sure you have some swap available)\n\nThe app does not send any sensitive data to cloud providers or similar services. All processing is done on your Nextcloud machine, using Tensorflow.js running in Node.js, which comes bundled with this app." : "Este aplicativo percorre sua coleção de mídia e adiciona tags de ajuste, categorizando automaticamente suas fotos e músicas.\n\n* 📷 👪 Reconhece rostos de fotos de contato\n* 📷 🏔 Reconhece animais, paisagens, alimentos, veículos, edifícios e outros objetos\n* 📷 🗼 Reconhece marcos e monumentos\n* 👂 🎵 Reconhece gêneros musicais\n* ⚡ A marcação funciona por meio das etiquetas colaborativas do Nextcloud, permitindo o acesso por qualquer um dos seus aplicativos\n  * 👂 ouça sua música marcada com o aplicativo audioplayer\n  * 📷 veja suas fotos marcadas com o aplicativo de fotos\n\nApós a instalação, você pode ativar a marcação nas configurações de administrador.\n\nRequisitos:\n- PHP 7.4 e acima\n- App \"etiquetas colaborativas\" ativado\n- Para velocidade nativa:\n  - Processador: x86 64 bits (com suporte para instruções AVX)\n  - Sistema com glibc (geralmente a norma no Linux; Alpine linux e FreeBSD *não* são esses sistemas)\n- Para velocidade sub-nativa (usando o modo JavaScript)\n  - Processador: x86 64 bits, arm64, armv7l (não é necessário AVX)\n  - Sistema com glibc ou musl (incl. Alpine linux)\n- ~ 4 GB de RAM livre (se você estiver cortando, certifique-se de ter alguma troca disponível)\n\nO aplicativo não envia dados confidenciais para provedores de nuvem ou serviços semelhantes. Todo o processamento é feito em sua máquina Nextcloud, usando Tensorflow.js em execução em Node.js, que vem junto com este aplicativo.",
    "Status" : "Status",
    "The machine learning models have been downloaded successfully." : "Os modelos de aprendizagem de máquina foram baixados com sucesso.",
    "The machine learning models still need to be downloaded." : "Os modelos de aprendizagem de máquina ainda precisam ser baixados.",
    "The app is installed and will automatically classify files in background processes." : "O aplicativo está instalado e classificará automaticamente os arquivos em processos em segundo plano.",
    "None of the tagging options below are currently selected. The app will currently do nothing." : "Nenhuma das opções de marcação abaixo está selecionada no momento. Atualmente, o aplicativo não fará nada.",
    "Image tagging" : "Entiquetamento de imagens",
    "Face recognition is working. " : "Reconhecimento facial está funcionando.",
    "An error occurred during face recognition, please check the Nextcloud logs." : "Ocorreu um erro durante o reconhecimento facial, verifique os logs do Nextcloud.",
    "Waiting for status reports on face recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Aguardando relatórios de status no reconhecimento facial. Se esta mensagem persistir por mais de 30 minutos, verifique os logs do Nextcloud.",
    "Face recognition:" : "Reconhecimento facial:",
    "Queued files" : "Arquivos em fila",
    "Last classification: " : "Última classificação:",
    "Object recognition is working." : "O reconhecimento de objetos está funcionando.",
    "An error occurred during object recognition, please check the Nextcloud logs." : "Ocorreu um erro durante o reconhecimento do objeto, verifique os logs do Nextcloud.",
    "Waiting for status reports on object recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Aguardando relatórios de status no reconhecimento de objetos. Se esta mensagem persistir por mais de 30 minutos, verifique os logs do Nextcloud.",
    "Object recognition:" : "Reconhecimento de objeto:",
    "Enable face recognition (groups pictures by people that appear in them in the photos app)" : "Ativar o reconhecimento facial (agrupa fotos de pessoas que aparecem nelas no aplicativo de fotos)",
    "Enable object recognition (e.g. food, vehicles, landscapes)" : "Ative o reconhecimento de objetos (por exemplo, alimentos, veículos, paisagens)",
    "Enable landmark recognition (e.g. Eiffel Tower, Golden Gate Bridge)" : "Ative o reconhecimento de pontos de referência (por exemplo, Torre Eiffel, Golden Gate Bridge)",
    "Audio tagging" : "Entiquetamento de áudio",
    "Audio recognition is working." : "O reconhecimento de áudio está funcionando.",
    "An error occurred during audio recognition, please check the Nextcloud logs." : "Ocorreu um erro durante o reconhecimento de áudio, verifique os logs do Nextcloud.",
    "Waiting for status reports on audio recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Aguardando relatórios de status no reconhecimento de áudio. Se esta mensagem persistir por mais de 30 minutos, verifique os logs do Nextcloud.",
    "Music genre recognition:" : "Reconhecimento de gênero musical:",
    "Enable music genre recognition (e.g. pop, rock, folk, metal, new age)" : "Ative o reconhecimento de pontos de referência (por exemplo, Torre Eiffel, Golden Gate Bridge)",
    "Video tagging" : "Entiquetamento de vídeo",
    "Video recognition is working." : "O reconhecimento de vídeo está funcionando.",
    "An error occurred during video recognition, please check the Nextcloud logs." : "Ocorreu um erro durante o reconhecimento de vídeo, verifique os logs do Nextcloud.",
    "Waiting for status reports on video recognition. If this message persists beyond 30 minutes, please check the Nextcloud logs." : "Aguardando relatórios de status no reconhecimento de vídeo. Se esta mensagem persistir por mais de 30 minutos, verifique os logs do Nextcloud.",
    "Video recognition:" : "Reconhecimento de vídeo:",
    "Enable human action recognition (e.g. arm wrestling, dribbling basketball, hula hooping)" : "Ativar reconhecimento de ação humana (por exemplo, queda de braço, drible de basquete, bambolê)",
    "Reset" : "Redefinir",
    "Click the button below to remove all tags from all files that have been classified so far." : "Clique no botão abaixo para remover todas as etiquetas de todos os arquivos que foram classificados até o momento.",
    "Reset tags for classified files" : "Redefinir etiquetas para arquivos classificados",
    "Click the button below to remove all face detections from all files that have been classified so far." : "Clique no botão abaixo para remover todas as detecções de rosto de todos os arquivos que foram classificados até agora.",
    "Reset faces for classified files" : "Redefinir rostos para arquivos classificados",
    "Click the button below to rescan all files in this instance and add them to the classifier queues." : "Clique no botão abaixo para verificar novamente todos os arquivos nesta instância e adicioná-los às filas do classificador.",
    "Rescan all files" : "Redigitalize todos os arquivos",
    "Terminal commands" : "Comandos do terminal",
    "To trigger a full classification run manually, run the following command on the server terminal." : "Para acionar uma classificação completa executada manualmente, execute o seguinte comando no terminal do servidor.",
    "To download all models preliminary to executing the classification jobs, run the following command on the server terminal." : "Para baixar todos os modelos preliminares à execução dos trabalhos de classificação, execute o seguinte comando no terminal do servidor.",
    "You can reset the tags of all files that have been previously classified by Recognize with the following command:" : "Você pode redefinir as etiquetas de todos os arquivos que foram classificados anteriormente pelo Reconhecer com o seguinte comando:",
    "You can delete all tags that no longer have any files associated with them with the following command:" : "Você pode excluir todas as etiquetas que não têm mais nenhum arquivo associado a elas com o seguinte comando:",
    "CPU cores" : "Núcleos de processamento",
    "By default all available CPU cores will be used which may put your system under considerable load. To avoid this, you can limit the amount of CPU Cores used." : "Por padrão, todos os núcleos de CPU disponíveis serão usados, o que pode colocar seu sistema sob carga considerável. Para evitar isso, você pode limitar a quantidade de núcleos de CPU usados.",
    "Number of CPU Cores (0 for no limit)" : "Número de núcleos de CPU (0 para sem limite)",
    "Tensorflow plain mode" : "Modo plain do Tensorflow",
    "Checking CPU" : "Verificando a CPU",
    "Could not check whether your machine supports native TensorFlow operation." : "Não foi possível verificar se sua máquina oferece suporte à operação nativa do TensorFlow.",
    "Your machine supports native TensorFlow operation, you do not need WASM mode." : "Sua máquina suporta a operação nativa do TensorFlow, você não precisa do modo WASM.",
    "WASM mode was activated automatically, because your machine does not support native TensorFlow operation:" : "O modo WASM foi ativado automaticamente porque sua máquina não suporta a operação nativa do TensorFlow:",
    "Enable WASM mode" : "Ativar o modo WASM",
    "Node.js path" : "Caminho do Node.js",
    "If the shipped Node.js binary doesn't work on your system for some reason you can set the path to a custom node.js binary. Currently supported is Node v14.17 and newer v14 releases." : "Se o binário Node.js fornecido não funcionar em seu sistema por algum motivo, você pode definir o caminho para um binário node.js personalizado. Atualmente, há suporte para as versões Node v14.17 e v14 mais recentes.",
    "Your server does not support AVX instructions" : "Seu servidor não suporta instruções AVX",
    "Your server does not have an x86 64-bit CPU" : "Seu servidor não possui uma CPU x86 de 64 bits",
    "Your server uses musl libc" : "Seu servidor usa musl libc",
    "Failed to load settings" : "Erro ao carregar configurações",
    "Failed to save settings" : "Erro ao salvar configurações",
    "never" : "nunca",
    "{time} ago" : "{time} atrás",
    "Cat" : "Gato",
    "Animal" : "Animal",
    "Wildlife" : "Natureza",
    "Nature" : "Natureza",
    "Puma" : "Puma",
    "Leopard" : "Leopardo",
    "Lion" : "Leão",
    "Wild cat" : "Gato selvagem",
    "Cheetah" : "Cheetah",
    "Seashore" : "Costa do mar",
    "Beach" : "Praia",
    "Water" : "Água",
    "Lakeside" : "Beira do lago",
    "Flower" : "Flor",
    "Plant" : "Planta",
    "Window" : "Janela",
    "Architecture" : "Arquitetura",
    "Stairs" : "Escadas",
    "Building" : "Edifícios",
    "Field" : "Campo",
    "Farm" : "Fazenda",
    "Landscape" : "Paisagem",
    "Portrait" : "Retrato",
    "People" : "Pessoas",
    "Fashion" : "Moda",
    "Ship" : "Navio",
    "Vehicle" : "Veículo",
    "Grasshopper" : "Gafanhoto",
    "Insect" : "Inseto",
    "Fish" : "Peixe",
    "Shark" : "Tubarão",
    "Chicken" : "Galinha",
    "Bird" : "Pássaro",
    "Ostrich" : "Avestruz",
    "Owl" : "Coruja",
    "Salamander" : "Salamandra",
    "Frog" : "Sapo",
    "Turtle" : "Tartaruga",
    "Reptile" : "Réptil",
    "Lizard" : "Lagartixa",
    "Chameleon" : "Camaleão",
    "Crocodile" : "Crocodilo",
    "Alligator" : "Aligátor",
    "Scorpion" : "Escorpião",
    "Spider" : "Aranha",
    "Duck" : "Pato",
    "Worm" : "Minhoca",
    "Shell" : "Concha",
    "Snail" : "Caracol",
    "Crab" : "Carangueijo",
    "Lobster" : "Lagosta",
    "Cooking" : "Cozinhando",
    "Penguin" : "Pinguim",
    "Whale" : "Baleia",
    "Dog" : "Cachorro",
    "Wolf" : "Lobo",
    "Fox" : "Raposa",
    "Bear" : "Urso",
    "Beetle" : "Besouro",
    "Butterfly" : "Borboleta",
    "Rabbit" : "Coelho",
    "Hippo" : "Hipopótamo",
    "Cow" : "Vaca",
    "Buffalo" : "Búfalo",
    "Sheep" : "Ovelha",
    "Ape" : "Primata",
    "Monkey" : "Macaco",
    "Lemur" : "Lêmure",
    "Elephant" : "Elefante",
    "Panda" : "Panda",
    "Instrument" : "Instrumento",
    "Music" : "Música",
    "Aircraft" : "Aeronave",
    "Airport" : "Aeroporto",
    "Tractor" : "Trator",
    "Weapon" : "Arma",
    "Backpack" : "Mochila",
    "Shop" : "Loja",
    "Office" : "Office",
    "Outdoor" : "Exterior",
    "Living" : "Vivência",
    "Tower" : "Torre",
    "Drinks" : "Bebidas",
    "Beverage" : "Refresco",
    "Food" : "Alimentos",
    "Shelter" : "Abrigo",
    "Furniture" : "Mobília",
    "Book" : "Livro",
    "Train" : "Trem",
    "Butcher" : "Açougueiro",
    "Car" : "Carro",
    "Historic" : "Histórico",
    "Boat" : "Barco",
    "Electronics" : "Eletrônicos",
    "Indoor" : "Interior",
    "Church" : "Igreja",
    "Shoe" : "Sapato",
    "Candle" : "Vela",
    "Coffee" : "Café",
    "Keyboard" : "Teclado",
    "Computer" : "Computador",
    "Helmet" : "Capacete",
    "Wall" : "Parede",
    "Clock" : "Relógio",
    "Dining" : "Jantar",
    "Kitchen" : "Cozinha",
    "Snow" : "Neve",
    "Dome" : "Domo",
    "Screen" : "Tela",
    "Flag" : "Bandeira",
    "Truck" : "Caminhão",
    "Store" : "Loja",
    "Tool" : "Ferramenta",
    "Pumpkin" : "Abóbora",
    "Vegetables" : "Vegetais",
    "Photography" : "Fotografia",
    "Library" : "Biblioteca",
    "Display" : "Exibir",
    "Bag" : "Sacola",
    "Cup" : "Caneca",
    "Rocks" : "Rochas",
    "Bus" : "Onibus",
    "Bowl" : "Tigela",
    "Monitor" : "Monitor",
    "Bike" : "Bicicleta",
    "Scooter" : "Scooter",
    "Camping" : "Acampamento",
    "Cart" : "Carrinho",
    "Piggy bank" : "Cofrinho",
    "Bottle" : "Garrafa",
    "Plate" : "Prato",
    "Camera" : "Câmera",
    "Camper" : "Acampante",
    "Barbecue" : "Churrasco",
    "Basket" : "Cesta",
    "Diving" : "Mergulho",
    "Snowmobile" : "Moto de neve",
    "Bridge" : "Ponte",
    "Couch" : "Sofá",
    "Theater" : "Teatro ",
    "Spoon" : "Colher",
    "Comic" : "Quadrinho",
    "Soup" : "Sopa",
    "Dessert" : "Sobremesa",
    "Bakery" : "Padaria",
    "Fruit" : "Fruta",
    "Pasta" : "Massa",
    "Meat" : "Carne",
    "Pizza" : "Pizza",
    "Wine" : "Vinho",
    "Alpine" : "Alpina",
    "Mountains" : "Montanhas",
    "Sand" : "Areia",
    "Wool" : "Lã",
    "Glass" : "Vidro",
    "Moment" : "Momento",
    "Info" : "Informação",
    "Document" : "Documento",
    "Puzzle" : "Quebra-cabeças",
    "Heritage" : "Herança",
    "Safe" : "Cofre",
    "Bucket" : "Cesta",
    "Baby" : "Bebê",
    "Cradle" : "Guindaste",
    "Patio" : "Pátio",
    "Mountain" : "Montanha",
    "Radio telescope" : "Radio-telescópio",
    "Theme park" : "Parque temático",
    "Festival" : "Festival",
    "Event" : "Evento",
    "Monument" : "Monumento",
    "Balloon" : "Balão",
    "Crib" : "Berço",
    "Fan" : "Ventilador",
    "Gas station" : "Posto de gasolina",
    "Wood" : "Madeira",
    "Bench" : "Banco",
    "Parking" : "Estacionamento",
    "Traffic" : "Tráfego",
    "Public transport" : "Transporte público",
    "Umbrella" : "Guardachuva",
    "Stage" : "Palco",
    "Toy" : "Brinquedo",
    "Vase" : "Vaso",
    "Mailbox" : "Caixa de correio",
    "Sign" : "Placa",
    "Gallery" : "Galeria",
    "Park" : "Parque"
},
"nplurals=3; plural=(n == 0 || n == 1) ? 0 : n != 0 && n % 1000000 == 0 ? 1 : 2;");
