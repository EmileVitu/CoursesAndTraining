//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initiation à Linux ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 'tab' : autofill.
// ./[nom du fichier .run] : éxecute le fichier.
// cd : changer de répertoire.
// ls : lister les fichiers du répertoire courant.
// clear : efface le contenu du terminal.
// ln -s [répertoire 1] [répertoire 2] : créé un raccourci de répertoire 1 dans répertoire 2
// sudo : obtenir une élévation des privilèges.
// sudo apt list --installed : retourne la liste des packages installés sur notre distribution.
// sudo apt-get update : mettre à jour le dictionnaire des packages de notre distribution.
// sudo apt-get upgrade : mettre à jour tous les packages installés sur notre système d'exploitation.
// sudo apt-cache search [mot-clé] : pour trouver le nom d'un logiciel dans la bibliothèque des logiciels disponibles, en faisant une recherche par un mot clé ou une partie du nom du logiciel.
// sudo apt-get install [nom du logiciel] : pour installer le logiciel.
// sudo apt-get remove -y [nom du package] : pour désinstaller un package.
// sudo dpkg -i [Nom du package] : pour éxecuter un package Debian '.deb'.
// sudo chmod +x [nom du fichier .run] : permet de donner les droits d'éxecution à un fichier .run.
// df -h : liste les périphériques branchés sur notre machine.
// lsblk : liste les points de montages, sda sont les disques, sdc sont les clefs USB.
// curl -fsSLo resource-url : permet d'effectuer une requête sur le web, comme à partir d'un navigateur, mais à partir du terminal.
// echo [quelque chose] | sudo tee fichier : permet de scripter, donc de rendre automatique l'écriture d'informations dans un fichier.
// ip a : pour obtenir les informations sur les configurations des cartes réseau branchées sur notre système (smartphones branchés en USB compris).
// ping [URL] : pour vérifier si un équipement est joignable sur le réseau.
// -----------
// Java :
// java -version : nous informe de la version de Java installée.
// javac -version : nous informe de la version du JDK installé.
// sudo apt install default-jdk : installe la version par défaut du JDK sur notre distribution.
// -----------
// Python :
// python3 -V : nous informe de la version de Python installée.
// python3 [nom du fichier .py] : éxecute le fichier .py si nous nous trouvons dans son répertoire parent.
// -----------
// Notable packages :
//      --> nitrogen : background image manager, background folder : usr/share/background.
//      --> okular : pdf reader.
//      --> neofetch : system information terminal viewer.
//      --> Documents : permet d'échanger des fichiers avec les smartphones Apple.
// -----------
// linuxfr.org : infos communauté FR Linux.
// kernel.org : infos noyau Linux.
// -----------
// sudo apt-get install ttf-mscorefonts-istaller : plugin fonts Microsoft Office.
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initions-nous à Linux /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Linux, c'est trop compliqué, c'est pour les pros.
//      --> Faux, Linux, ce n'est pas compliqué, c'est même passionnant !
// Avec ce cours d'initiation à Linux, un nouveau monde s'ouvre à nous, car nous allons reprendre le contrôle de notre ordinateur, grâce à un système d'exploitation libre et gratuit.
//      - Dans ce cours, nous allons découvrir le système Linux.
//      - Nous apprendrons à l'utiliser en tant que poste de travail.
//      - Nous verrons comment l'utiliser dans notre vie professionnelle.
// -----------
// Vous êtes un habitué de Windows ou de macOS, et vous vous demandez juste comment Linux fonctionne ? Nous nous sommes tous posé cette question.
// Et c'est comme ça que ça démarre en général avec Linux :
//      --> On est simplement curieux.
//      --> On suit un chapitre.
//      --> Et sans qu'on s'y attendre, on se passionne pour ce nouveau monde, on veut apprendre plus, aller plus loin.
// C'est la magie de Linux !
// Cela dit, vous pourriez penser que ce n'est pas pour vous, que Linux, c'est réservé aux geeks. C'est faux. Et pas de panique : c'est un cours pour les débutants.
//      --> Linux est accessible à tout le monde, et nous allons vous le prouver !
// Prêt à découvrir un système d'exploitation fascinant, le tout, gratuitement et en toute autonomie ?
//      --> Eh oui, car grâce à Linux, vous allez reprendre le contrôle de votre ordinateur.
// Vous n'êtes pas sûr de savoir ce que cela veut dire ? Tant mieux ! Alors, inscrivez-vous et rendez-vous au premier chapitre !
// Objectifs pédagogiques :
//      - Mettre en place Linux sur votre ordinateur avec une distribution comme Ubuntu.
//      - Interagir avec votre ordinateur en entrant des lignes de commande dans un terminal.
//      - Utiliser les bons outils pour exploiter Linux dans votre vie professionnelle.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Faites vos premiers pas sur Linux /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Plongez dans l'histoire de Linux //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nous savons déjà que Linux est un système d'exploitation ou 'OS', comme Windows ou MAC OS. Mais qu'est-ce qu'un système d'exploitation ?
//      --> C'est un programme que nous installons sur un ordinateur, et qui va agir comme un chef d'orchestre. Il dirige la musique et fait en sortes que tout fonctionne.
// Nous pouvons le voir comme un super logiciel qui fait l'interface entre nous et la machine, pour nous permettre de l'utiliser.
// Mais avant de rentrer dans le vif du sujet, nous allons avoir une petite histoire, qui nous aidera à comprendre pourquoi Linux est très différent de ce que nous avons utilisé jusqu'à présent.
//      --> Dans les années 70, les ordinateurs sont d'énormes machines qui occupent l'espace d'une pièce entière.
// Pour pouvoir intéragir avec ces ordinateurs, les informaticiens de cette époque ont mis au point un système qui s'appelle UNIX.
// Il va rapidement être sollicité par de grandes entreprises comme IBM ou HP, qui vont payer pour l'utiliser.
//      --> UNIX n'est autre que l'ancêtre de Linux.
// Depuis la naissance d'UNIX, nous avons assisté à deux choses :
//      - La popularisation de l'ordinateur personnel ou PC.
//      - L'émergence du logiciel libre.
// Initié dans les années 80 par Richard Stallman, le mouvement du libre se bat pour garder les programmes informatiques ouverts et accessibles à tout le monde.
//      --> Concrètement, les logiciels libres publient leur code source, donc leur recette de fabrication. C'est le cas de Linux.
// Environ 10 plus tard, dans les années 90, un autre personnage important de notre histoire, Linus Torvalds, s'inspire d'UNIX. Il développe un nouveau système d'exploitation pour les particuliers, Linux.
// Nous pouvons retrouver Linux un peu partout, dans notre box internet, les robots de la NASA, et notamment Ingenuity qui s'est posée sur Mars en février 2021.
// -----------
// Vous connaissez probablement déjà quelques systèmes d'exploitation très répandus comme Windows, édité par Microsoft, ou macOS, édité par Apple. Mais connaissez-vous Linux ?
// Mais savez-vous vraiment ce qui se cache derrière Linux ?
//      --> Linux, c'est un système d'exploitation.
// Mais au fait, c'est quoi un système d'exploitation ?
//      --> Un système d'exploitation se dit Operating System en anglais, que l'on abrège en « OS ».
// Un système d'exploitation, c'est un programme que l'on installe sur un ordinateur et qui va agir un peu comme un chef d'orchestre. Il lance la musique ! … Et fait en sorte que tout fonctionne.
// Voyez-le comme un "super logiciel" qui fait l'interface entre vous et votre ordinateur, pour vous permettre de l'utiliser en gérant ses ressources :
//      - Processeur.
//      - Carte graphique.
//      - Espace de stockage.
//      - Mémoire vive, etc.
// On dit qu'il "exploite" les ressources physiques de l'ordinateur, d'où son nom : "système d'exploitation".
// En fait, un système d'exploitation vous permet de faire tout ce que l'on peut faire aujourd'hui avec un ordinateur : installer des logiciels ou encore jouer à des jeux.
// Le rôle d'un système d'exploitation est de faire l'interface entre l'ordinateur et l'utilisateur : utiliser des applications comme VLC ou Firefox par exemple.
// -----------
// - Le rôle d'un système d'exploitation :
// En fait, ce qui rend Linux tellement unique, c'est que vous pourrez jouer les chefs d'orchestre vous aussi ! Linux vous permet de reprendre le contrôle de votre ordinateur.
//      --> Qu'est-ce que ça veut dire, “reprendre le contrôle” de mon ordinateur ?
// Eh bien, c'est tout l'objet de ce cours sur Linux… Alors, gardons-en un peu pour la suite ; mais pour vous donner un avant-goût, vous pourrez par exemple mettre en place :
//      - Des logiciels de calcul pour exploiter la puissance des cartes graphiques récentes.
//      - Des logiciels multimédia pour réaliser vos propres vidéos.
//      - Ou encore des outils de programmation pour développer vos applications.
// Mais avant toute chose : saviez-vous que Linux existe déjà depuis le début des années 90, mais qu'il prend racine encore plus loin dans le temps ?
// Allez hop, retour dans le passé ! Revenons dans les années 70, au tout début de l'ère informatique.
// L'histoire de Linux est importante à connaître parce que ça vous aidera à comprendre les différences fondamentales entre Linux et les autres systèmes d'exploitation, comme Windows, notamment.
// -----------
//  - Découvrez UNIX, l'ancêtre de Linux :
// Nous sommes donc dans les années 70. Il y a des fleurs sur nos habits, et les ordinateurs sont d'énormes machines qui occupent l'espace d'une pièce entière.
// Ces ordinateurs sont alors 100 000 fois moins puissants qu'un smartphone… Ils n'ont pas d'interfaces graphiques comme on en connaît aujourd'hui. Et pourtant, ils coûtent déjà très cher !
//      --> Mais alors, comment faisait-on pour les utiliser et les faire fonctionner ?
// Les informaticiens de cette époque ont créé un "système" qui permet d'utiliser ces ordinateurs. Voyez ce système comme une sorte de langage qui permet à l'homme d'interagir avec la machine :
// Grâce au système, l'homme rentre à la main une commande (une action ou un calcul que la machine doit réaliser). Et l'ordinateur l'exécute.
// La toute première version de ce système est née d'une alliance entre les gros laboratoires de recherche américains (AT&T), et des constructeurs comme General Electric. Et elle se nommait UNICS !
// Les informaticiens aiment tout optimiser, alors UNICS est très rapidement devenu UNIX, simplement pour économiser une lettre !
//      --> La philosophie générale de ce système UNIX tient en une phrase : chaque composant du système doit être développé pour faire une seule action et la faire parfaitement.
// Pourquoi le code est divisé en plusieurs parties ? Et qu'est-ce que ça veut dire, "faire appel à lui" ? C'est la particularité du système !
//      --> UNIX est codé sous la forme de “modules”. Ce sont des morceaux de code qui communiquent entre eux pour bénéficier des actions qu'ils maîtrisent.
// Un système d'exploitation sous la forme de modules fait l'interface entre l'ordinateur et la personne qui l'utilise.
// Alors tout cela est bien beau, mais quel est le rapport avec Linux ?
// Il faut savoir que deux phénomènes sont entrés en interaction et ont eu ensemble un impact considérable sur le Linux d'aujourd'hui :
//      - L'émergence du libre, ou open-source, en anglais.
//      - La popularisation de l'ordinateur domestique (ou PC, en anglais : "Personal Computer").
// -----------
//  - Comprenez l'enjeu et la philosophie du libre :
// À la sortie du système UNIX, les industriels ne misaient pas beaucoup sur l'informatique pour faire de l'argent. Ils avaient bien tort, n'est-ce pas ?
// Mais très vite, l'intérêt financier s'est manifesté ! Alors, les industriels et les constructeurs sont passés sous un système de licences.
// Voyez la licence comme la vente d'un droit d'utilisation. En achetant une licence, on paie l'autorisation d'utiliser un logiciel ou un programme, mais dans un cadre précis et sous certaines conditions.
// Des licences ont donc été créées à destination des entreprises qui voulaient utiliser ce système d'exploitation : il y a eu un UNIX pour HP, un UNIX pour IBM, un UNIX pour SUN, etc.
// Il est difficile de normaliser un standard dans ces conditions, surtout si le code n'est pas librement accessible (à cause des licences).
//      --> Qu'est-ce que les licences ont à voir avec le cours ?
// Eh bien, il faut comprendre que ce contexte d'essor informatique conjugué à l'appât du gain par les industriels, en a énervé plus d'un !
//      --> Richard Stallman est le premier à s'être vraiment révolté contre ce principe de licence UNIX. Une sombre histoire d'imprimante qui ne fonctionnait plus, ça l'a rendu furieux.
// Alors, il a lancé en 1983 la licence publique générale (de l'anglais GPL pour General Public Licence), ouvrant ainsi la voie au mouvement Open Source.
// Cette licence vise à préserver la liberté d'utiliser, de modifier et de diffuser le système et ses versions dérivées.
//      --> Elle garantit donc que les sources des programmes restent ouvertes et accessibles à… tout le monde !
// Si vous vous demandez ce que ça veut dire et quelles autres implications cela a eu dans le monde de l'information et de l'informatique, on vous partage une petite anecdote :
//      --> En 1999, Richard Stallman a lancé les idées à l'origine de Wikipédia : une encyclopédie ouverte, gratuite et libre.
// -----------
//  - Figurez-vous que Linux est partout !
// Au début des années 90 (20 ans après UNIX), un autre personnage important de notre histoire, Linus Torvalds.
// Il cherche à développer des outils de production sur une version d'UNIX qui fonctionne sur des PC domestiques ; à destination des particuliers.
// Vous l'aurez peut-être deviné, il appelle cette version Linux, en gardant le X en hommage à UNIX.
// Linux est donc :
//      --> Un descendant direct d'une longue lignée de systèmes d'exploitation qui remonte jusqu'à UNIX, leur ancêtre commun.
//      --> Il a gardé la même philosophie initiale : des programmes qui font une seule opération essentielle du système, mais qui la font parfaitement.
//      --> Il est totalement intégré dans le mouvement du libre, ce qui en fait un système d'exploitation ouvert et gratuit !
// Ce que les gens ne savent pas toujours, c'est que l'on retrouve Linux un peu partout aujourd'hui.
// Par exemple, Android est un cousin proche de Linux, avec le même grand-père UNIX.
// Linux est également dans la box de votre fournisseur Internet, mais aussi dans les robots de la NASA et notamment "Ingenuity" qui s'est posé sur Mars en février 2021 !
// Vous en conclurez sans doute que c'est un système d'exploitation fiable. Et vous avez raison ! Pour pouvoir exploiter des équipements aussi sensibles, c'est qu'il fonctionne bien !
// Oui c'est sûr, mais alors finalement, quelles sont les différences entre Linux et Windows ?
// Pour commencer, Windows est un système d'exploitation payant.
// À sa sortie, il avait tout de même une longueur d'avance par rapport à Linux avec son concept de bureau graphique, qui est devenu très populaire auprès des utilisateurs.
// C'est vrai que Linux est longtemps resté réservé aux geeks qui n'avaient pas peur d'utiliser des lignes de commandes compliquées, et des terminaux en mode texte.
// Mais ces dernières années, Linux a fait beaucoup de progrès avec son interface utilisateur et son bureau graphique.
// Vous verrez qu'aujourd'hui vous pouvez faire tout ce que vous faites sous Windows avec Linux, mais gratuitement et avec plus d'autonomie !
// Allez, plongez avec nous dans Linux d'aujourd'hui, vous n'allez pas le regretter !
// -----------
//  - En résumé :
//          --> Linux est un système d'exploitation hérité du système UNIX.
//          --> Il est diffusé sous licence publique générale, une licence libre, et il est gratuit.
//          --> Sa philosophie : "faire une chose et la faire parfaitement".
// Dans le chapitre suivant, nous allons voir ce qu'est une distribution Linux, et vous en installerez une sur votre ordinateur.
// Pas de panique, c'est la première étape, et on vous explique tout !
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Téléchargez une distribution Linux ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// --> Linux est un système d'exploitation monolithique modulaire.
//         --> Monolithique signifie que les parties fondamentales du système sont regroupées dans un bloc de code unique, que nous appelons le 'Noyau'.
//         --> Modulaire car ce noyau est organisé sous la forme de modules.
// Le noyau est le coeur du système, la base, dans laquelle nous pouvons compiler des fonctions complémentaires.
//      --> Ce sont d'autres blocs de code que nous pouvons ajouter ou retirer, sans impacter le système. D'où le terme 'Modulaire'.
// Comme il est diffusé sous licence GPL, la licence open-sourcce la plus utilisée au monde, tout le code du système d'exploitation est donc accessible librement et gratuitement.
// Etant donné que le noyau n'est pas forcément compréhensible pour nous, ce pourquoi des Linuxiens chevronnés ont créé à partir du noyau, des programmes prêts à l'emploi.
//      --> Nous appelons ces programmes des packages, ou paquets, qui sont compatibles entre eux. Lorrsqu'ils sont réunis, ils forment ce que nous appelons une 'Distribution'.
// C'est la distribution qui permet d'exploiter l'ordinateur via une interface beaucoup plus facile à utiliser.
// Aujourd'hui, il existe beaucoup de distributions différentes, à disposition de la communauté Linux.
// Certaines sont orientées sécurité, d'autres multimédia, et d'autres encore sont orientées serveur.
// Une distribution orientée serveur par exemple, s'adresse en général aux administrateurs qui souhaitent déployer un serveur web ou une base de données.
//      --> Nous allons partir sur une distribution orientée poste de travail, et pas n'importe laquelle, 'Ubuntu', une des distributions les plus célèbres.
// -----------
// Dans le chapitre précédent, vous avez eu une petite introduction au système d'exploitation Linux.
// En effet, c'est toujours important de connaître un minimum l'histoire des technologies que vous allez exploiter.
// Dans ce chapitre, nous allons parler :
//      - Du cœur de Linux, c'est-à-dire de son noyau.
//      - Du concept de "distribution" qui est le fruit d'un gros travail communautaire pour rendre Linux accessible et maintenable par tous.
// -----------
//  - Comprenez le principe de noyau :
// Linux est un système d'exploitation monolithique modulaire.
// Mais qu'est-ce que ça veut dire ?
// Eh bien, c'est tout simple :
//      - Monolithique :
// Cela veut dire que tout le code de Linux est exécuté dans UN SEUL gros objet en mémoire de l'ordinateur. C'est ce qu'on appelle le noyau. Le noyau Linux est la base, le cœur du système Linux.
// Le noyau contient toutes les fonctions rendues par le système d'exploitation, comme par exemple la gestion de la mémoire, du processeur, des disques, etc.
//      - Modulaire :
// Cela veut dire que le code du noyau Linux est organisé sous la forme de modules. Ce sont des blocs de code.
// Le noyau Linux est monolithique et modulaire : les modules sont des blocs de code. Ils forment le cœur du système Linux, sa base fondamentale.
// Cette organisation présente un avantage très important ! Grâce à cela, on peut ajouter et/ou retirer des modules dans un noyau en cours d'exécution, sans avoir à l'arrêter ou à le redémarrer.
// Comme vous le savez maintenant : Linux est diffusé sous licence GPL (General Public Licence). C'est la licence open source la plus utilisée dans le monde !
//      --> TOUT le code du système d'exploitation est donc accessible librement et gratuitement.
// Le code est d'ailleurs disponible sur le site de Linux Kernel Archives.
//      --> Cette page est la référence officielle des sources du noyau Linux, et elle est maintenue par les équipes de développement de Linus Torvalds.
// Télécharger le noyau Linux revient au même que télécharger une archive compressée, de type fichier .zip.
// Les extensions sont différentes pour les sources du noyau Linux, mais le principe est le même :
//      --> Lorsqu'on décompresse cette archive de quelques 100 Mo de données, on a un répertoire qui contient plus de 25 millions de lignes de code !
// Oui c'est énorme… mais c'est en grande partie ce qui permet de faire fonctionner le processeur de votre ordinateur, les cartes réseaux, les systèmes de fichiers, etc.
// Si nous le téléchargeons, le fichier à télécharger ne doit pas vous faire peur s'il a une allure que vous ne reconnaissez pas ! D'ailleurs, il est numéroté selon le modèle “X.Y.Z”.
// C'est une nomenclature qui permet de suivre l'évolution des versions. Eh oui, puisque c'est libre, c'est souvent mis à jour !
//      --> Nomenclature des versions du noyau Linux :
//              --> Le premier chiffre, X, représente le numéro de version majeur, il correspond à une génération.
//              --> Le deuxième chiffre, Y, représente les mises à jour au sein d'une génération.
//              --> Enfin, le dernier chiffre, Z correspond aux révisions.
// Cette nomenclature a un sens précis :
//      --> X est le numéro majeur, il correspond à ce qu'on pourrait appeler une génération : il s'agit d'une version qui lui fait franchir un cap important.
//      --> Y est le numéro mineur, il évolue plus rapidement au sein d'une branche majeure, il correspond à toutes les mises à jour régulières du code au sein d'une génération.
//      --> Z correspond à une révision, c'est-à-dire une correction d'anomalie ou une mise à jour de sécurité.
// Mais alors comment je vais utiliser Linux, si je ne télécharge pas le noyau ?
// Effectivement, on ne vous demandera pas de télécharger le noyau dans ce cours.
// Mais puisque le noyau c'est la base du système Linux, des développeurs ont bâti à partir de celui-ci ce que l'on appelle des distributions !
// -----------
//  - Découvrez le concept de distribution :
// Ce que fait le noyau Linux n'est pas très compréhensible pour nous, les humains.
//      --> Alors, par-dessus le noyau Linux, on installe des programmes qui permettent de produire toutes sortes de choses : des documents, des images, des vidéos, du code, etc.
// Ces programmes ont été créés et mis à disposition de la communauté par des développeurs qui se sont associés pour le faire. Rappelez-vous, Linux est un système communautaire, libre et ouvert !
// Tous ces programmes sont déjà prêts à l'emploi. Ce sont les packages.
// Non seulement ils sont préparés pour fonctionner avec une version du noyau, mais ils sont aussi compatibles entre eux !
// Lorsque tous ces packages répondant à un ou plusieurs besoins sont réunis, ils forment ce que l'on appelle une distribution Linux.
// Les packages forment une distribution autour du noyau. Ils sont interdépendants et compatibles avec le noyau.
// -----------
//  - Choisissez une distribution adaptée au besoin :
// Aujourd'hui, il existe beaucoup de distributions !
// Effectivement, il y en a beaucoup, mais si vous observez attentivement, vous verrez que la plupart des distributions viennent en fait de quelques distributions historiques de référence :
//      --> Debian, Red Hat et Slackware.
// En fait, il faut comprendre qu'elles sont orientées vers un besoin en particulier. Certaines sont orientées sécurité, d'autres multimédia, d'autres serveur ou encore réseau.
// Les distributions orientées serveur sont très techniques et s'adressent aux administrateurs Linux qui souhaitent déployer un serveur web, par exemple, ou encore une base de données.
// Celles qui vont nous intéresser dans ce cours sont celles qui sont orientées poste de travail :
//      - Elles disposent d'un environnement graphique très chouette (oui, il fallait rivaliser avec Windows et macOS qui occupaient tout le marché).
//      - Et sont bien plus faciles à appréhender lorsqu'on vient du monde Windows.
// Notez cependant qu'à tout moment, vous pouvez facilement transformer votre poste de travail Linux en un serveur sécurisé, c'est aussi ça la magie de Linux !
// Parmi les grandes distributions orientées poste de travail, on retrouve :
//      - Linux Mint (créée par un Français, dérivée de la famille des Debian). Elle est très reconnue pour son élégance.
//      - Elementary OS (de la famille des Debian aussi). Elle vise à se rapprocher de l'expérience utilisateur sur macOS.
//      - Fedora (de la famille des Red Hat). Elle vise à rester à la pointe des dernières technologies Linux.
//      - Ubuntu (une distribution de la famille des Debian, certainement la plus célèbre de toutes).
// La lignée des distributions Linux. On peut voir qu'Ubuntu appartient à la famille des Debian.
// Son concepteur, Mark Shuttleworth, souhaitait qu'elle soit accessible à tout le monde, avec l'ambition claire et revendiquée de casser la suprématie de Windows sur le marché des postes de travail.
// Pour télécharger Ubuntu :
//      - Rendez-vous sur Le site officiel d'Ubuntu.
//      - Cliquez sur la dernière version (LTS ou non, peu importe).
//      - Récupérez le fichier image ISO (de type ubuntu-20.10-desktop-amd64.iso) qui fait presque 3 Go.
//      - Stockez ce fichier dans un dossier facile à retrouver. Vous en aurez besoin un peu plus loin dans ce cours.
// -----------
//  - En résumé :
//          --> Le noyau de Linux est monolithique et modulaire.
//          --> Ses versions sont numérotées, et ses sources sont disponibles sur le site de Linux Kernel Archives.
//          --> Une distribution Linux se compose d'un noyau, de packages, et d'outils pour gérer leurs dépendances.
//          --> Les distributions sont développées pour répondre à un besoin (serveur, poste de travail ou autre).
//          --> Debian, Red Hat et Slackware sont les 3 premières distributions Linux historiques.
//          --> Ubuntu est une distribution dérivée de Debian.
//  --> Dans le chapitre suivant, nous allons parler des environnements de bureau, c'est ce qui vous permet de travailler et d'interagir facilement avec votre ordinateur.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Choisissez votre bureau Linux /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Si nous parlons de bureau d'ordinateur, c'est l'écran de base sur lequel nous pouvons placer des raccourcis, des applications, créer des dossiers et manipuler des fichiers.
// Les distributions de type 'poste de travail' sont généralement livrées avec un environnement de bureau.
// C'est très facile à prendre en main car l'interface du bureau est graphique.
// Pourtant, un bureau Linux est fondamentalement différent d'un bureau Windows ou macOS.
// Sous Linux, il existe un programme différent pour chaque composant de l'environnement de bureau.
// Nous pouvons ainsi combiner ces éléments pour personnaliser notre bureau.
// Nous avons donc le noyau Linux, sur laquelle se greffe la distribution Ubuntu, et dans laquelle nous avons l'interface graphique GNOME.
// -----------
//  - Comprenez le concept de bureau sous Linux :
// Dans le chapitre précédent, vous avez fait connaissance avec le cœur du système d'exploitation Linux.
//      --> A savoir le noyau et le principe de distribution qui vous permet de travailler sur votre ordinateur.
// Si vous avez suivi jusqu'ici, vous avez téléchargé Ubuntu. Mais avant de l'installer, prenons quelques instants pour bien comprendre ce qu'est un bureau sous Linux.
// Il s'agit tout simplement d'un environnement graphique qui file la métaphore du bureau sur lequel on travaille : il y a des dossiers, des fichiers, une corbeille, etc.
//      --> C'est une interface graphique qui réagit par rapport à ce que vous faites avec le clavier ou la souris, par exemple comme cliquer sur une croix pour fermer une fenêtre.
// Donc, un bureau constitue votre environnement de travail, sur votre écran, de la même manière que Windows ou macOS. Et pourtant, ceux de Linux sont fondamentalement différents. Mais pourquoi ?
// Pour commencer, Windows ou macOS sont fournis avec un seul type de bureau, dans lequel on retrouve :
//      - Une session de connexion avec un identifiant et un mot de passe.
//      - Un espace graphique qui couvre la totalité de votre écran, souvent habillé avec un fond d'écran.
//      - Des fenêtres avec leurs propriétés, comme les bordures, les polices, les couleurs (que vous pouvez modifier).
//      - Un menu de lancement d'applications, le fameux menu "Démarrer" de Windows, par exemple.
//      - Au moins une application en standard, l'explorateur de fichier, qui vous permet de naviguer dans l'arborescence du système, comme le 'Finder' de macOS.
// Si sous Windows, ou encore sous macOS, tous ces éléments constitutifs de votre environnement graphique sont inclus par défaut avec le système, ce n'est pas le cas pour Linux.
// Au contraire même, chacun de ces éléments est indépendant des autres ! Souvenez-vous de l'adage UNIX : faire une chose mais la faire parfaitement.
// Par conséquent, sous Linux, il existe un programme différent pour chaque composant de l'environnement de bureau. Et vous avez le choix de combiner ces éléments pour fabriquer votre propre bureau.
// -----------
//  - Découvrez les principaux bureaux Linux :
// Est-ce que j'ai besoin d'installer moi-même un environnement de bureau ?
// Non, car les distributions Linux proposent des environnements de bureau avec tous leurs composants déjà préconfigurés et prêts à l'emploi !
// Parmi ces bureaux, on retrouve :
//      - Gnome : c'est sûrement le plus connu. À l'époque où Linux cherchait à gagner des parts de marché sur Windows, Gnome était son arme de pointe.
//          Un bureau super convivial, très moderne, avec tous les gadgets d'animation inclus.
//          La conséquence directe : Gnome est un gros mammouth qui demande beaucoup de ressources, et une conférence communautaire se tient tous les ans pour essayer de dégraisser le monstre !
//      - KDE : le deuxième bureau le plus connu sous Linux. Il a fait le pari de se rapprocher de l'ambiance de Windows pour séduire ses utilisateurs.
//          C'est vrai que pour une transition, KDE est un bureau que je peux vous conseiller.
//      - XFCE : j'apprécie particulièrement ce bureau, qui se veut minimaliste, mais très efficace.
//          Idéal pour redonner vie à une machine un peu vieillissante, ce bureau consomme très peu de ressources et est complètement personnalisable.
// Ces 3 grands bureaux seront disponibles avec beaucoup de distributions. Mais certaines d'entre elles n'hésitent pas à créer leur propre environnement de bureau.
// Et dans cette catégorie, on peut citer les bureaux :
//      - Cinnamon : créé à l'origine pour la distribution Linux Mint. Il a tellement bien été accueilli par la communauté qu'il est désormais porté sur pas moins de 30 distributions différentes.
//      - Pantheon : développé exclusivement pour la distribution Elementary OS, et qui fait tout son possible pour procurer une expérience utilisateur proche de celle de macOS.
//      - Deepin : développé pour sa distribution homonyme Deepin Linux.
//      - Unity : qui était l'environnement de bureau développé pour la distribution Ubuntu. Notez que depuis 2017, Ubuntu a abandonné son environnement de bureau au profit de Gnome.
// OK d'accord, je comprends qu'il y a plein d'options possibles, mais laquelle je vais avoir si j'ai la distribution Ubuntu ?
// Dans ce cours, vous allez travailler avec l'environnement de bureau Gnome qui est livré par défaut avec la distribution Ubuntu.
// -----------
//  - En résumé :
//      --> Les environnements de bureau sous Linux sont modulaires.
//      --> Chaque module est responsable d'une fonction (authentification, gestion des fenêtres, du fond d'écran, etc.).
//      --> Gnome, KDE et XFCE sont les 3 bureaux les plus connus de Linux.
//      --> Les distributions peuvent aussi proposer leur propre bureau.
//      --> Gnome est le bureau de la distribution Ubuntu.
// Dans le chapitre suivant, nous allons installer Linux et sa distribution Ubuntu !
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Installez Linux Ubuntu ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Pour tester Ubuntu, nous allons d'abord créer un environnement virtualisé.
//      --> La virtualisation est une technique très répandue en informatique, qui est devenue accessible au grand public.
//              --> La virtualisation sert à simuler un ordinateur dans un ordinateur.
// Cet ordinateur virtuel, que nous appelons aussi 'Machine Virtuelle', permet d'isoler le système que nous voulons installer, sans toucher à l'environnement initial.
// Par exemple, nous pouvons lancer Linux à l'intérieur d'une fenêtre Windows, et vice-versa. Nous pouvons même lancer un Linux dans un autre Linux.
// C'est très pratique pour essayer des systèmes d'exploitation. Nous allons à présent voir comment virtualiser la distribution Ubuntu, et ce, avec l'outil 'VirtualBox'.
// -----------
//  - Familiarisez-vous avec le concept de virtualisation
// Pour installer votre distribution Ubuntu, nous allons d'abord créer un environnement virtualisé.
//      --> C'est une technique très répandue en informatique, et qui est devenue accessible au grand public ! La virtualisation sert à simuler un ordinateur dans votre ordinateur.
// Cet ordinateur virtuel, qu'on appelle aussi 'machine virtuelle', permet d'isoler le système que vous voulez installer, Linux en l'occurrence, sans impacter le système initial.
// Si vous souhaitez en savoir plus sur le sujet, n'hésitez pas à faire un tour sur Virtualisez votre architecture et vos environnements de travail.
// Vous pouvez donc lancer par exemple Linux à l'intérieur d'une fenêtre Windows et vice versa, ou même lancer un Linux dans un autre Linux.
// C'est très pratique pour essayer des systèmes sans toucher à l'environnement initial, et ça plaît en général à ceux qui ne veulent pas prendre de risque.
// OK super, mais comment on fait pour “virtualiser” ?
// Grâce à un hyperviseur : VirtualBox. C'est certainement l'un des hyperviseurs les plus faciles à prendre en main. Et c'est ce que l'on va voir dans ce chapitre !
// Attention : pour virtualiser une machine sur votre ordinateur, il faut vous assurer que votre processeur soit compatible et activé pour cette fonctionnalité.
// Pour le vérifier, on vous propose de vous aider du site de BlueStacks, il est très bien fait.
// Selon votre modèle de carte mère, vous allez trouver les informations nécessaires pour activer cette fonction.
// -----------
//  - En résumé :
//      --> Un hyperviseur permet de virtualiser un environnement.
//      --> Linux peut être installé sur une machine virtuelle.
//      --> Les ressources à allouer à la machine virtuelle Linux dépendent de la distribution choisie.
//      --> L'installation d'Ubuntu s'effectue grâce à un didacticiel graphique simple.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Exploitez Linux en tant que poste de travail //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Connectez-vous à Internet et gérez vos applications ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Nous avons installé Ubuntu. Maintenant, nous devons nous connecter à Interne, nous allons à présent voir cela.
// Une fois que nous serons connectés, nous allons apprendre à utiliser le gestionnaire de packages.
//      --> Les packages sont en fait des applications que nous pouvons utiliser sur notre ordinateur, comme par exemple un navigateur, un lecteur de PDF, des outils de création graphiques etc.
// Nous les retrouvons dans le gestionnaire de logiciels, mais nous pouvons aussi le réaliser par ligne de commande via un terminal.
// Enfin, nous verrons comment ajouter de nouveaux logiciels en suivant deux méthodes :
//      --> Le store d'Ubuntu.
//      --> Via un terminal.
// Le terminal sous Linux est assez incontournable, et il nous est très utile et important de savoir l'utiliser.
// -----------
//  - Réalisez une configuration réseau simplifiée :
// Dans la vidéo suivante, nous allons voir comment ouvrir le panneau de configuration pour vous connecter à Internet. Vous verrez, deux modes de configuration sont possibles : automatique ou manuel.
// La configuration automatique ne présente aucune difficulté. Il suffit de suivre les indications du panneau de configuration.
// La configuration manuelle demande juste d'avoir sous la main les informations suivantes au moment où vous le faites :
//      - Une adresse IP.
//      - Un masque.
//      - Une passerelle.
//      - Un DNS.
// Mais où est-ce que je peux trouver toutes ces informations ?
// Pas d'inquiétude ! On vous explique dans la vidéo de démonstration où les trouver.
// Et puis, dites-vous que vous pouvez toujours passer par la configuration automatique si vous voulez aller au plus simple !
//      - Pour commencer, il nous faut cliquer sur le bouton du menu en bas à gauche (les 9 petits carrés), puis ouvrir les 'Settings'.
//      - Nous arrivons dans les paramètres, nous cliquons sur l'onglet 'Network', puis sur l'engrenage, situé à droite de la connection 'Wired', ce qui nous ouvre une nouvelle fenètre.
//      - Ceci nous affiche les informations de connection : l'adresse IPv4, IPv6, le DNS, le MAC, etc.
//      - Nous obtenons ceci, car si nous cliquons sur l'onglet 'IPv4', nous constatons que nous nous sommes connectés en mode 'Automatique (DHCP)'.
//              --> Si nous devions connecter manuellement Ubuntu sur le réseau, il faudrait saisir le bouton manuel et remplir les champs souhaités.
//                      --> L'adresse IP, le masque de réseau, la passerelle et le DNS (1.1.1.1 est conseillé car protège notre vie privée et est facile à retenir).
// -----------
//  - Utilisez le gestionnaire de logiciels :
// Pour augmenter encore votre intérêt pour cette distribution, on va attaquer la partie "logiciels". Ce sont les fameux packages prêts à l'emploi dont on parlait dans la première partie.
// On les trouve dans le gestionnaire de logiciels, un peu comme dans Windows. Vous ne serez donc pas perdu question interface !
// Se servir de ce gestionnaire de packages est vraiment pratique. Cela permet d'installer et de mettre à jour des logiciels très facilement.
// Et puisqu'on parle de mise à jour, nous allons commencer par ça.
// Dans les vidéos suivantes, nous allons voir deux façons de mettre à jour des logiciels :
//      --> En utilisant le panneau de configuration.
//      --> En utilisant le terminal de commande.
//              - Option 1 : Faites des mises à jour via le panneau de configuration :
//                  Cette première méthode est la plus simple car elle passe par une interface graphique, qui vous parle, parce que vous y êtes habitué.
//                  Il existe deux icônes dans le menu d'Ubuntu, 'Softwares and Updates' et 'Software Updater'.
//                      --> 'Software and Updates' va nous permettre de configurer le gestionnaire de logiciels et de mises à jour d'Ubuntu.
//                          Dans les deux premiers onglets, nous pouvons ajouter ou supprimer des logiciels open source.
//                          Dans l'onglet 'Updates', nous pouvons organiser et planifier les mises à jour.
//                      --> 'Software Updater', nous permet de vérifier quels packages ou logiciels doivent être mis à jour, lorsque nous le cliquons, il cherche les mises à jour disponibles.
//              - Option 2 : Faites des mises à jour via le terminal :
//                  Cette seconde option consiste à ouvrir le terminal de commande pour rentrer à la main les lignes de commande qui permettent d'effectuer une mise à jour.
//                      --> <$ sudo apt-get update [nom du logiciel]>, pour trouver la dernière version d'un logiciel.
//                      --> <$ sudo apt-get upgrade [nom du logiciel]>, pour mettre à jour un logiciel.
//                  Vous avez pu le remarquer, sur certaines actions avec le terminal, il est nécessaire d'utiliser la commande sudo.
//                      --> La commande sudo permet d'obtenir les droits d'administration pour effectuer une tâche qui les nécessite ; par exemple, installer un nouveau logiciel via les packages.
//                          C'est un peu comme lorsque Windows vous demande de saisir le mot de passe administrateur.
//                          Sauf que sudo s'appuie sur votre propre mot de passe, pas celui de l'administrateur.
//                          Finalement, lorsque vous utilisez sudo, vous n'êtes pas obligé de changer de compte, ou de devenir administrateur du système.
//                      --> Vous n'effectuez en fait qu'une "élévation de privilèges" temporaire, pendant l'exécution de la tâche concernée. C'est un principe de sécurité très important.
// -----------
//  - Installez vos premiers logiciels grâce aux packages :
// Votre distribution est mise à jour !
// Maintenant, nous allons voir comment ajouter de nouveaux logiciels. Pour cela, deux options :
//      --> Via l'application Store d'Ubuntu.
//          La première option, c'est la plus confortable quand on débute : vous faites vos courses dans le store d'Ubuntu. C'est comme un catalogue des applications disponibles.
//      --> Via le terminal de commandes.
//          La seconde option, exactement le même principe, mais… via un terminal et quelques commandes à retenir.
// Mais finalement, pourquoi se casser la tête avec un terminal alors, si on peut tout faire via une interface graphique ?
//      --> Le terminal a beaucoup d'avantages. Il permet notamment d'automatiser toutes ces commandes.
// Pas convaincu ? Regardez les vidéos suivantes pour voir comment faire ! Nous allons installer un gestionnaire de fond d'écran et un lecteur PDF.
//      --> Option 1 : installez un logiciel via le Store d'Ubuntu :
//          Le Store est accessible via le bouton en forme de valise orange dans la barre du bureau à gauche.
//          Une fois à l'intérieur, nous avons des suggestions proposées, et nous pouvons directement taper dans la barre de recherche ce que nous souhaitons, ici 'Nitrogen'.
//      --> Option 2 : installez un logiciel via le terminal de commande :
// Vous venez d'apprendre à utiliser deux nouvelles commandes :
// --> <$ sudo apt-cache search [mot-clé]>, pour trouver le nom d'un logiciel dans la bibliothèque des logiciels disponibles, en faisant une recherche par un mot clé ou une partie du nom du logiciel.
// --> <$ sudo apt-get install [nom du logiciel]> pour installer le logiciel.
// -----------
//  - En résumé :
//      --> Vous pouvez configurer le réseau et mettre à jour votre distribution grâce à des outils graphiques.
//      --> Les distributions Linux proposent un "store" qui permet d'installer facilement de nouveaux logiciels.
//      --> Le terminal est votre meilleur ami sous Linux ! Domptez-le, vous ne serez pas déçu.
//      --> La commande sudo permet d'obtenir une élévation de privilèges sous Linux.
// --> Dans le chapitre suivant, nous allons voir comment naviguer sur Internet quand on est sous Linux ; vous allez voir, rien de compliqué !
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Naviguez sur Internet /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dans ce chapitre, nous allons nous intéresser à la question des navigateurs pour pouvoir surfer sur Internet.
// Ubuntu s'installe directement avec Firefox. Il est d'ailleurs open source. Mais ce n'est pas le seul navigateur disponible sous Linux.
// -----------
//  - Découvrez les navigateurs disponibles sous Linux :
// Nous allons voir quels navigateurs sont disponibles sous Linux, et comment les installer sur la distribution.
// Les principaux navigateurs sous Linux :
//      - Firefox.
//      - Brave.
//      - Opera.
//      - Chromium (version open source de Google Chrome).
// Brave est un navigateur plutôt jeune (2016) qui est disponible sur les distributions Debian et ses dérivés (Ubuntu et Mint), mais aussi sur les distributions Red Hat et dérivés (Fedora, CentOS).
// Opera, quant à lui, n'est pas totalement open source (il a une partie open source et une autre qui ne l'est pas, mais il fonctionne très bien).
// On ne le voit pas directement dans ce comparateur, mais Chromium est la version open source de Chrome (Chrome s'est inspiré du cœur de Chromium pour lancer son propre navigateur).
// Il est d'ailleurs également disponible sur Windows, mac OS, Android.
// Les autres navigateurs que l'on voit dans ce comparatif sont sous licence propriétaire, ce qui ne nous intéresse pas forcément lorsque l'on est sous Linux.
// -----------
//  - Installez des navigateurs Internet sous Linux :
// Voyons en vidéo comment installer :
//      --> Opera en passant par l'application Store d'Ubuntu.
//      --> Chromium en passant par le terminal de commande.
//      --> Brave depuis le site du navigateur, d'une façon un peu atypique, en effet, nous avons plusieurs lignes de commande, elles se trouvent sur brave.com/linux.
// Petite fonctionnalité sympa : Brave vous indique le nombre de pubs que vous croisez sur des sites Internet, et qu'il a bloquées pour améliorer votre confort de navigation.
// Cette démonstration vous a plu ? N'hésitez pas à creuser de votre côté si vous avez la curiosité d'installer d'autres navigateurs : libre à vous de faire votre choix !
// Voyons quand même les principales options de configuration. C'est un réflexe qu'il est bon d'avoir dès le départ.
// -----------
//  - Paramétrez les options de configuration de Firefox :
// On va regarder de plus près les options de configuration de Firefox, notamment celles qui concernent la protection de vos données personnelles.
// Vous pourrez ainsi vous en inspirer pour régler votre propre version de Firefox, ou les comparer avec les options proposées par d'autres navigateurs.
// Où est-ce qu'on trouve ces options de configuration ?
//      --> Vous les trouverez dans le menu du navigateur, dans “Préférences” !
// C'est important de passer en revue toutes ces options de protection de la vie privée et de la sécurité, parce que Firefox propose un maximum d'options.
// Si vous ne deviez retenir qu'une chose pour configurer votre navigation sur Firefox de manière sécurisée, ce serait de décocher deux éléments qui le sont par défaut :
//      --> L'enregistrement de vos identifiants et mots de passe par le navigateur.
//          Décocher la case : "Proposer d'enregistrer les identifiants et les mots de passe pour les sites web".
//      --> L'autorisation de la collecte et de l'utilisation de vos données.
//          Décocher la case : "Autoriser Firefox à envoyer des données techniques et des données d'interaction à Mozilla".
// -----------
//  - En résumé :
//      --> Vous avez le choix de votre navigateur sous Linux !
//      --> Il est tout aussi facile d'installer les navigateurs sous Linux que sous Windows.
//      --> Il est important de prendre le temps de configurer les principales options de vos navigateurs, notamment celles qui concernent vos données personnelles.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Naviguez sur Internet /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Thunderbird, est installé par défaut avec Ubuntu, tout comme Firefox. Nous allons ici voir comment le configurer avec une adresse de messagerie.
// Toutefois, il existe aussi d'autres logiciels de messagerie électronique, comme Evolution, plus ancien, ou encore Geary, qui est minimaliste.
// Nous parlerons aussi de 'Protonmail', un projet assez novateur.
// -----------
//  - Découvrez la panoplie des clients de messagerie sous Linux :
// Partons à la découverte de 4 clients de messagerie très connus sous Linux (plus un bonus). Ils sont tous différents, avec leurs avantages et leurs inconvénients.
//      --> Thunderbird, Le client de messagerie le plus connu sous Linux est Thunderbird. C'est un logiciel qui fonctionne aussi très bien sous Windows et macOS.
//          Il est très intéressant en termes de fonctionnalités, notamment les onglets, les modules, ses passerelles de connexion avec les services de Google.
//          Il est indépendant de l'environnement de bureau.
//      --> Evolution, le plus ancien, c'est un client de messagerie (et un calendrier) qui remonte aux premières versions des bureaux Linux, avec l'idée de concurrencer la suite de Microsoft.
//          Evolution est construit pour fonctionner de base dans un environnement de bureau Gnome.
//      --> Geary, minimaliste mais efficace voilà un logiciel comme on les aime.
//          Geary est un projet Gnome, mais qui s'intègre parfaitement dans les autres environnements de bureau, car sa philosophie générale est minimaliste.
//          C'est juste un client de messagerie, mais c'est un bon client de messagerie. Avec toutes les fonctionnalités essentielles de ce type de logiciel.
//      --> KMail est un projet KDE. Un client de messagerie très bien maintenu, qui marche aussi très fort et qui vient s'intégrer dans la suite collaborative proposée par KDE.
//      --> ProtonMail est un projet assez sympa ! son objectif ? Proposer un environnement de messagerie :
//              --> Très sécurisé, chiffré de bout en bout.
//              --> Et qui respecte totalement votre vie privée.
//          C'est une alternative très sérieuse aux services de Google notamment, mais aussi à ceux de vos fournisseurs d'accès Internet.
//          C'est un projet suisse, qui va bénéficier naturellement de la confidentialité suisse.
//          À noter que ProtonMail propose un serveur de messagerie et plusieurs versions de client de messagerie (bureau, mobile, webmail, etc.).
// -----------
//  - Installez et exploitez Thunderbird :
// Maintenant, il est temps de configurer votre client de messagerie.
// Thunderbird est déjà installé par défaut avec Ubuntu, c'est normal, c'est lui la star !
// Une fois Thunderbird ouvert, il ne manque qu'à cliquer sur le bouton en haut à droite, puis sur 'New' > 'Existing mail account', puis de renseigner les champs nécessaires.
// Le protocole IMAP est le mieux dans un premier temps, puis nous cliquons sur 'Finsih', le mot de passe est redemandé une ou plusieurs fois, puis c'est terminé et fonctionnel.
// -----------
//  - Peut-être êtes-vous tenté par Geary ?
// Lancez-vous et essayez de l'installer et de le configurer en passant par le terminal.
// Il nous suffit de faire :
//      --> apt-cache search geary.
//      --> sudo apt-get install geary.
// Une fois installé, il ne nous manque plus qu'à le lancer et la configuration de la boite e-mail se lance automatiquement.
// -----------
//  - En résumé :
//      --> Vous avez aussi le choix de votre client de messagerie sous Linux !
//      --> Vous pouvez configurer les clients de messagerie Linux avec les services standard du web, comme Gmail.
//      --> Il existe des alternatives sérieuses aux services de messagerie des géants du Web, par exemple ProtonMail.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Éditez des documents sous Linux ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Comment faire pour travailler sous Linux, notamment avec des documents de type Microsoft Office.
// Il existe deux suites, OpenOffice et LibreOffice, bien que cette dernière est mieux maintenue et plus régulièrement mise à jour.
// Concernant la compatibilité, comment ouvrir et éditer des documents provenant de Microsoft Office, ayant des formats différents que ceux proposés par une des suites Office de Linux ?
// LibreOffice utiliser le format '.odf', un format 'interopérable', une inovation fondamentale.
// -----------
//  - Découvrez les suites bureautiques sous Linux :
// Dans ce chapitre, nous allons utiliser des suites bureautiques, et notamment le traitement de texte !
// Aujourd'hui, il est possible de faire de la bureautique sous Linux grâce à deux suites assez connues désormais :
//  --> OpenOffice : Il contient les modules suivants :
//          - L'éditeur de texte Writer.
//          - Le tableau Calc.
//          - Le gestionnaire de diapositives Impress.
//          - Le gestionnaire de bases de données locales Base.
//          - Le logiciel de dessin Draw.
//          - Et un module spécialisé, Math.
//      OpenOffice est la première suite bureautique sous Linux, créée par SUN dans les années 2000.
//      Lorsque Oracle a racheté SUN, la suite ne faisait pas partie des priorités du célèbre éditeur de base de données. Elle est alors retombée sous la coupelle de la fondation Apache.
//      Aujourd'hui, OpenOffice est rarement mise à jour, et la plupart des utilisateurs vont migrer sous LibreOffice.
//  --> LibreOffice : Si vous souhaitez faire de la bureautique sous Linux, votre suite sera très probablement LibreOffice.
//      Ce projet est né d'une séparation de code avec OpenOffice justement lorsque Oracle a racheté SUN. On y retrouve tous les composants classiques, tels que :
//          - Writer.
//          - Calc.
//          - Impress.
//          - Draw.
//          - Base.
//      Et plein d'extensions qui permettent d'ajouter des fonctionnalités. Par exemple, il y a tout ce qu'il faut pour dessiner des schémas réseaux professionnels !
//      Bien entendu, LibreOffice fonctionne aussi sous Windows et macOS, car cette suite est devenue une vraie référence !
// -----------
//  - Installez et exploitez LibreOffice :
// Maintenant, vous allez installer la suite bureautique LibreOffice !
// Après quoi, on ouvrira chacun des modules de la suite :
//      - Le traitement de texte.
//      - Le tableur.
//      - L'outil de présentation.
//      - L'outil de gestion de base de données locales.
// Vous verrez qu'ils ressemblent beaucoup à leurs cousins respectifs sous Windows !
// Si le français n'est pas pris par défaut lors de l'installation, vous pouvez consulter la documentation.
// Très intéressant tout ça, mais comment ça se passe question compatibilité si on échange des documents avec d'autres utilisateurs qui utilisent la suite Microsoft, et vice versa ?
// Excellente question ! Et rassurez-vous : il est évidemment possible d'échanger des documents bureautiques.
// -----------
//  - Échangez des documents au format Microsoft :
// Bien entendu, la suite Microsoft Office est très largement implantée dans le monde professionnel aujourd'hui.
//      --> Mais n'oubliez pas que les formats des documents de la suite de Microsoft sont propriétaires ! Or LibreOffice s'appuie sur un format ouvert.
// En effet, LibreOffice écrit ses documents au format OpenDocument, créé pour normaliser un format indépendant des suites logicielles qui l'exploitent.
// Ce format est notamment porté par de gros industriels tels que IBM ou SUN. Il devient suffisamment connu pour que Microsoft adapte sa suite afin de pouvoir également le lire.
// Que ce soit entre Word et Writer, ou encore entre Excel et Calc, il est tout à fait possible de travailler avec les deux suites sur les mêmes documents. 
// Cela, dans la mesure où les fichiers restent tout de même assez simples (particulièrement pour Excel).
// OK mais alors, comment échanger des documents entre ces deux suites ?
//      --> Option 1 : demandez à l'interlocuteur d'installer LibreOffice. Cette solution est sûrement la plus simple.
//              LibreOffice est gratuit et peut s'installer sur Linux, Windows et macOS.
//              De plus, si vous convertissez vos interlocuteurs à cette suite, vous contribuez à son implantation et sa popularité !
//      --> Option 2 : enregistrer au format PDF. Cette solution est tout aussi simple. Sous LibreOffice, un seul clic vous permet d'exporter tous vos documents au format PDF.
//      --> Option 3 : le plugin ODF Converter pour Microsoft. Ce plugin permet d'ouvrir des fichiers créés par LibreOffice dans la suite Office de Microsoft.
//              Ce plugin est gratuit (diffusé sous licence GNU) : sudo apt-get install ttf-mscorefonts-istaller.
// Petite astuce pour rendre les deux suites un peu plus compatibles : utiliser les polices de caractères de Microsoft dans les documents LibreOffice.
// Et il est possible d'installer ces polices sous Linux, grâce à des packages.
// -----------
//  - À vous de jouer !
// Compliquons un peu notre affaire et ajoutons un nouvel acteur : une suite bureautique en ligne, Google Drive.
// Prêtez-vous à l'exercice suivant :
//      - Éditez un document tableau sur Spreadsheet de la suite Google Drive.
//      - Exportez-le au format Excel ou ODS.
//      - Ouvrez-le avec votre outil de bureautique sous Linux (OpenOffice ou LibreOffice).
// -----------
//  - En résumé :
//      --> La suite bureautique de référence sous Linux est LibreOffice.
//      --> Microsoft Office et LibreOffice n'utilisent pas le même format de document, mais la compatibilité entre les deux suites s'améliore, et il est possible aujourd'hui de les faire communiquer.
//      --> Le format PDF, le plugin ODF Converter et les polices propriétaires de Microsoft sont les outils facilitant l'échange entre les documents Microsoft Office et LibreOffice.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Branchez des périphériques sous Linux /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  - Utilisez une clé USB ou un disque externe :
// Lorsque nous insérons une clef USB sur notre machine, elle est montée directement et est affichée sur le bureau, ainsi que sur la barre de menu à gauche de l'écran.
// Si nous effectuons un clic droit sur notre périphérique et cliquons sur propriétés, nous voyons qu'il est monté dans le dossier 'media/emile'.
// Ce répertoire est l'endroit où les points de montages se font sous linux.
// Dans un terminal, nous avons quelques lignes de code intéressantes concernant les périphériques externes :
//      - df -h : liste les périphériques branchés sur notre machine.
//      - lsblk : liste les points de montages, sda sont les disques, sdc sont les clefs USB.
// Il est recommandé d'utiliser du FAT32 car compatibles avec tous les systèmes d'exploitation.
// -----------
//  - Connectez une imprimante USB ou réseau :
// Aujourd'hui, Ubuntu reconnaît presque toutes les imprimantes du marché. Lorsque ce n'est pas le cas, il faut lui indiquer le fichier driver.
// En français, on parle de "pilote" mais c'est vrai qu'on l'entend souvent sous son appellation anglaise. 
//      --> Un "driver" (ou pilote), c'est ce qui permet à un système d'exploitation de se faire comprendre par le périphérique avec lequel il veut interagir.
// Autrement dit, un driver d'imprimante est un logiciel qui traduit les ordres du système dans le langage de l'imprimante. Sans driver, l'imprimante ne pourrait pas être utilisée.
// Tout va donc dépendre de l'accessibilité des drivers :
//      --> Sont-ils libres d'accès et peuvent-ils être intégrés directement dans le noyau Linux ?
//      --> Ou est-ce qu'ils ne le sont pas (ils sont donc propriétaires) ? Dans ce cas-là, il faut installer quelque chose de propriétaire.
// Et s'il existe une histoire de driver et d'imprimante très célèbre dans le monde Linux, c'est bien celle de Richard Stallman :
// Nous sommes en 1970, Richard Stallman occupe un poste de programmeur au MIT.
// Dans son activité quotidienne, il utilise assez souvent une imprimante, et comme tout le monde, il ne supporte pas d'avoir de mauvaises surprises en allant chercher ses travaux d'impression.
// Du coup, il décide d'améliorer le driver qui gère cet équipement.
// C'est simple, il a les compétences pour modifier le code, il a un besoin, et quelques heures de travail plus tard, le voilà équipé d'un driver spécifique qui lui convient parfaitement.
// Et puis l'informatique s'industrialise, les brevets et les licences font désormais la loi chez les constructeurs et les éditeurs informatiques.
// En 1980, le MIT passe un accord cadre avec Xerox pour remplacer toutes les imprimantes du parc.
// Résultat, Richard Stallman retrouve ses mauvaises surprises en allant chercher ses travaux d'impression...
// Qu'à cela ne tienne ! Il reprend son code de l'époque et cherche à adapter le driver de Xerox de la même façon.
// Oui... mais non. Entretemps le monde de l'informatique à changé, et le driver Xerox est fermé, inaccessible ! Plus moyen de l'adapter de manière spécifique.
// Voilà un Richard Stallman en colère et consterné. Il ne lui en faut pas plus pour déclencher le mouvement du "libre".
// Et comme il ne fait pas les choses à moitié, il structure juridiquement cette idée du logiciel libre sous la forme d'une fondation, la Free Software Foundation, qu'il crée en 1985.
// Depuis, cette fondation est la brique de base du mouvement du logiciel libre, qui vise à garantir l'accès aux codes sources.
// Essayons ensemble de brancher une imprimante et voyons ce qu'il se passe :
//      - Settings > Printers > Additional Printer Settings (si elle n'est pas reconnue).
//          --> Ici, nous pouvons l'ajouter manuellement si besoin.
//      - Une fois l'imprimante affichée dans l'écran 'Printers', nous pouvons cliquer sur le bouton à sa droite et ouvrir ses propriétés pour ajouter un driver par exemple.
// Si vous rencontrez des problèmes pour ajouter une imprimante, pas de panique, vous pouvez vous rendre sur le site de documentation francophone à propos d'Ubuntu qui vous guidera.
// -----------
//  - Exploitez un téléphone portable :
// Voyons maintenant comment faire un partage de connexion entre votre téléphone portable et votre distribution Ubuntu. C'est LA fonctionnalité qui vous garantit la mobilité avec Linux !
// Attention, le téléphone n'est pas accessible via un point de montage classique, comme un autre espace de stockage, car c'est le téléphone qui limite le transfert de données.
// Ici, votre ami se nomme “Network manager”, ou gestionnaire réseau. Et encore une fois, il fait tout le boulot pour vous : il suffit de connecter votre téléphone (Apple ou Samsung…), et ça marche !
//      - Connectez un smartphone Android de Samsung :
//          Finalement, le partage de connexion sous Linux consiste simplement à configurer la carte réseau que représente votre téléphone.
//          Cette fonctionnalité se trouve au même endroit que pour une carte réseau classique :
//              --> Paramètres > Réseau (ou Settings > Network pour la version anglaise).
//      - Connectez un smartphone Apple :
//          Vous avez pu voir que la configuration d'un partage de connexion avec un téléphone Apple ou Android s'est faite en quelques clics, c'est donc assez simple.
//          La distribution Ubuntu est livrée avec beaucoup de drivers propriétaires qui facilitent l'utilisation de tels équipements. Ce n'est pas forcément le cas de toutes les distributions.
//          Certaines, notamment Debian, nécessiteront un peu plus d'efforts, et l'installation de packages supplémentaires, pour réaliser ce jumelage.
// Dans ces vidéos, vous avez peut-être remarqué de nouvelles commandes, notamment :
//      --> ping [URL] : pour vérifier si un équipement est joignable sur le réseau.
// -----------
//  - En résumé :
//      --> Les périphériques de stockage, comme un disque dur externe ou une clé USB, sont très bien reconnus sous Linux.
//      --> La plupart des distributions Linux reconnaissent également très facilement les imprimantes contemporaines.
//      --> Vous pouvez tout à fait partager une connexion téléphone avec votre ordinateur sous Linux.
//      --> Il ne faut pas mettre en colère un Richard Stallman !
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilisez Linux dans votre activité professionnelle ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Traitez vos médias son, image et vidéo ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Petit tour d'horizon des meilleurs outils :
//      - Gimp.
//      - Krita.
//      - Inkscape.
//      - VLC.
//      - Pitivi.
//      - KDENLIVE.
//      - LMMS.
// -----------
// Bienvenue dans cette dernière partie !
// Elle est consacrée à l’utilisation de Linux dans une activité professionnelle.
// Mais d'ailleurs, être sous Linux ne limite pas mes possibilités en termes d’outils, si je veux travailler pour une entreprise ou des clients qui ne sont pas adeptes de ce système d’exploitation ?
// C’est vrai que la majorité des entreprises fonctionnent sous Windows. C’est le système d’exploitation le plus utilisé.
// Mais ce n’est pas pour ça que vous ne pouvez pas exercer votre métier (s’il requiert l’usage d’un ordinateur, bien sûr) en restant sous Linux !
// Windows, tout comme macOS, est un système d’exploitation propriétaire. Cela veut dire qu’il est fermé.
//      --> Or, tout le but de ce cours c’est de vous montrer que vous pouvez :
//              --> Reprendre le contrôle de votre ordinateur avec Linux, un système d’exploitation libre, et des outils open source.
//              --> ET continuer à faire ce que vous avez besoin de faire avec un ordinateur au quotidien : aller sur Internet, recevoir des mails, mais aussi bien sûr, travailler !
// La suite LibreOffice et un client de messagerie comme Thunderbird couvrent déjà la majorité des besoins pour les métiers qui requièrent l’usage d’un ordinateur.
// Mais sachez qu’il existe d’autres outils plus spécifiques qui permettent de travailler dans le secteur du numérique, si l’on veut rester sous Linux et donc utiliser des logiciels libres.
// C’est le cas notamment pour tout ce qui touche à la création graphique et au développement informatique.
// Dans ce chapitre, nous allons voir quels outils se prêtent particulièrement au système Linux si vous exercez dans le monde de la création graphique ou de l'audiovisuel !
// -----------
//  - Utilisez des logiciels de création graphique :
// Pour les plus créateurs d’entre vous, voilà 3 logiciels libres et gratuits qui vont vous permettre d’exprimer pleinement votre talent, et qui font référence sous Linux :
//      - GIMP.
//      - Krita.
//      - Inskape.
//          --> Gimp :
//              GIMP est un outil qui permet de faire de la retouche d’image. C’est l’équivalent du Photoshop d’Adobe.
//              Il est très populaire et utilisé ! On va donc voir comment l'installer sur votre distribution Ubuntu !
//              N’oubliez pas qu’il est possible d’installer GIMP par les deux méthodes classiques :
//                  --> Via le store d’Ubuntu.
//                  --> Via le terminal.
//          --> Krita :
//              Krita est un outil développé pour le deuxième bureau le plus utilisé après Gnome : KDE.
//              Krita permet de faire du dessin et de l’illustration, mais aussi d’éditer des images au format bitmap.
//              En France, il existe un excellent guide de Krita avec Linux : David Revoy, l’auteur d’une webcomics, Pepper&Carrot.
//              Son blog est une mine de ressources si vous voulez apprendre à utiliser Krita. Et David Revoy est d’ailleurs en contact avec l’éditeur de Krita pour contribuer à l’amélioration de l’outil.
//              Par ailleurs, sur cette page de son blog, vous obtiendrez toutes les informations concernant son matériel et l’utilisation de Linux !
//          --> Inkscape :
//              Inskape permet de gérer les images au format vectoriel. C'est-à-dire des images qui ont le grand avantage de pouvoir être redimensionnées sans perte de qualité.
//              Avec le vectoriel, plus de logos tout moches qui pixellisent ! Sous Windows ou macOS, Adobe propose Illustrator pour gérer ce type d’image.
//              Il existe de nombreux formats d’images vectorielles. Le plus connu d’entre eux est SVG, pour Scalable Vector Graphics.
//              Il s’appuie notamment sur de l’ASCII (c'est-à-dire les chiffres et lettres communs, ainsi que les caractères spéciaux de la ponctuation et des mathématiques), et est organisé en XML.
//              Oui, vous avez bien lu, des images codées comme le script XML d’un développeur !
// -----------
//  - Utilisez des logiciels de création vidéo :
// Si vous travaillez dans l’audiovisuel, là encore il existe évidemment des outils libres qui vous permettront d’exercer votre métier en restant sous Linux !
// Voici un petit florilège des outils les plus connus :
//      - Pitivi : c'est un tout petit outil qui vous permet de faire des montages vidéo, et qui s’intègre historiquement dans l’environnement de bureau Gnome.
//          Cependant, ne vous fiez pas à sa taille, car Pitivi supporte les formats des pros et notamment le Material Exchange Format.
//      - Kdenlive : il s’intègre dans un environnement de bureau KDE, et fonctionne sous macOS et Windows.
//          C’est un logiciel qui plaira aux débutants pour sa prise en main facile et rapide, mais qui ne décevra jamais les utilisateurs confirmés pour autant.
// Ces 2 logiciels sont libres et gratuits, édités sous licence GPL.
//      - Lightworks : c'est un logiciel propriétaire, mais qui s’installe gratuitement sous Windows, Linux et macOS.
//          Cet outil contient notamment un PAD, qui transforme votre ordinateur en machine de montage !
// Et comme ce dernier outil est très intéressant, nous vous proposons de l’installer sur la distribution Ubuntu, car par ailleurs, il ne s’installe pas avec les packages.
//      --> Ce qui nous permettra de voir une autre façon d’installer un logiciel sous Linux !
// Pour télécharger Lightworks depuis le site de l’éditeur, deux solutions :
//      --> DEB : compatible avec les distributions héritées de Debian, dont Ubuntu.
//      --> RPM : compatible avec les distributions héritées de Red Hat.
//                  --> Comment installer un fichier '.deb' ?
//                          Nous passons par un terminal : 
//                              - D'abord, nous nous déplaçons dans le répertoire qui contiens le fichier en utiliisant les commandes 'cd' et 'ls'.
//                              - Puis nous lui passons la commande : 'sudo dpkg -i [Nom du package]'.
//                              - Nous avons des erreurs car des dépendances ne sont pas installées, il faut donc installer les dépendances avant de relancer le fichier .deb.
// 
// Vous remarquerez ici qu’il est nécessaire de télécharger le package directement depuis le site de l’éditeur.
// Ce package ne fait pas partie du dictionnaire de packages de la distribution.
// Ce n’est pas forcément un souci, sauf lorsque le package de l’éditeur requiert d’autres packages pour fonctionner (des dépendances).
// C’est alors à vous de résoudre ces dépendances, c'est-à-dire d’installer les packages nécessaires pour faire tourner celui de l’éditeur.
// -----------
//  - Profitez des logiciels multimédia sous Linux :
// Pour finir, regardons ce qui existe du côté des logiciels de lecture son et vidéo !
//      - VLC : c'est LA référence en termes de lecteur vidéo.
//      - MPlayer : il est très connu sous Linux, notamment pour sa compatibilité avec énormément de formats vidéo différents.
//          Vous voulez piloter vos vidéos directement depuis le clavier ? MPlayer est fait pour vous !
//      - LMMS : Allez, un petit dernier pour la route, véritable studio pour faire de la musique, est un outil numérique audio très complet.
// -----------
//  - En résumé :
//      --> Il existe tout un panel de logiciels graphiques et multimédia sous Linux.
//      --> GIMP, Krita et Inkscape sont les références pour le traitement d’image, et n’ont rien à envier à la suite d’Adobe.
//      --> Si Lightworks vous permettra d’exprimer vos talents en création vidéo, LMMS sera votre outil de travail pour le son.
//      --> Et vous pourrez même retrouver votre cher VLC, l’indispensable lecteur que vous connaissez déjà sous Windows.
// Dans le chapitre suivant, nous allons nous intéresser aux outils qui permettent de développer sous Linux ; à tout de suite !
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Configurez Linux pour développer //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Linux fournit tous les outils nécessaires pour faire du développement informatique.
// Linux peut aussi héberger nos environnements de compilation, d'éxecution et d'interprétation de nos langages de prédilection.
// -----------
//  - Installez votre environnement de développement (IDE) préféré :
// Linux fournit bien entendu tous les outils permettant de développer, en l'occurrence des IDE (environnements de développement).
//      - Kate :
//          Kate est un petit éditeur de texte spécialisé dans les fonctions de développement, encodage, coloration syntaxique, grammaire des langages, etc.
//          Très léger et très efficace pour KDE ; Kate est disponible également sous Windows et macOS.
//      - Geany :
//          Geany est un IDE avec des fonctionnalités avancées en termes de développement. Compatible avec beaucoup de langages différents !
//          Gros avantage, il n’est pas lié à un environnement de bureau particulier. Il est disponible également sous Windows.
//      - Eclipse :
//          Eclipse, c'est le gros projet des IDE de développement, historiquement déployé en environnement Java.
//          C’est un logiciel professionnel qui offre non seulement tout le panel des fonctionnalités classiques d’un IDE de développement.
//          Il offre également celles pour faire des tests, de la gestion de configuration, du reporting etc. Très implanté en entreprise, vous avez de grandes chances de le croiser sur votre chemin !
//      - Atom :
//          Atom est LA star actuelle des IDE de développement. Il est notamment plébiscité sur les projets JavaScript, puisqu’il gère nativement des plugins en nodeJS.
//          Il est édité sous licence MIT et fonctionne sur Linux, Windows et macOS.
//          Atom n’est pas présent dans le store Ubuntu, il faut donc télécharger le package directement sur le site d’Atom.io !
//          Pour télécharger Atom depuis le site de l’éditeur, deux solutions :
//              --> DEB : compatible avec les distributions héritées de Debian, dont Ubuntu.
//              --> RPM : compatible avec les distributions héritées de Red Hat.
// -----------
//  - Exploitez vos langages de programmation :
// Second sujet du métier de développeur, les environnements langages !
// Bien entendu Linux peut héberger vos environnements de compilation, d’exécution et d’interprétation de vos langages préférés.
// Nous avons sélectionné deux langages qui ont la cote : Java et Python.
//      - Java : Java est un langage orienté objet, compilé, avec la notion d’environnement d’exécution (JRE) et de développement (JDK).
//          Le JDK fournit tout l'outillage nécessaire pour :
//              - Créer des programmes et des applications en Java.
//              - Compiler les sources pour créer des classes et/ou des packages.
//          Le JRE est destiné aux machines d’exploitation. Il sera suffisant pour exécuter des programmes et applications Java.
//          Toutefois vous ne pourrez pas compiler (l’opération de compilation n’est pas recommandée sur une machine de production ou d’exploitation).
//              --> java -version : nous informe de la version de Java installée.
//              --> javac -version : nous informe de la version du JDK installé.
//              --> sudo apt install default-jdk : installe la version par défaut du JDK sur notre distribution.
//      - Python :
//          Python est un langage interprété (son code source est lu directement, ligne après ligne, par un interpréteur).
//          Il est très utilisé dans les milieux scientifiques, notamment, mais qui sert beaucoup pour l’automatisation des tâches d’administration sous Linux.
//          Il est fortement probable que l’environnement d’exécution Java et une version de Python soient déjà installés sur les distributions Linux.
//          Cela dit, il se peut qu’il manque encore quelque morceaux, notamment l’environnement de développement Java.
//          Voyons comment corriger ce manque, et même, créer votre premier script Python !
//              --> python3 -V : nous informe de la version courante de Python installée si elle existe.
//              --> Ensuite, nous pouvons écrire 'print("Python n'est pas aussi bien que Java")' avec Atom dans un fichier 'script.py', et le sauvegarder dans un dossier.
//              --> Enfin, avec la console, il nous suffit de nous déplacer dans le dossier et d'entrer la commande : 'python3 script.py', et le String s'imprime dans le terminal !
// En dehors de Python et Java, vous pourrez bien entendu programmer en langage C, qui est le langage compilé avec lequel est codé Linux, mais aussi en C++, son grand frère orienté objet.
// Vous pourrez également développer avec des langages interprétés comme le Perl, ou même le Bash.
// Bref, Linux est un excellent système pour les métiers du développement !
// -----------
//  - En résumé :
//      --> Choisissez votre IDE parmi les petits qui s’intègrent facilement et sont très pratiques, comme Kate ou Geany, ou encore parmi les plus costauds et professionnels, avec Atom ou Eclipse.
//      --> Vous avez aussi le choix de votre langage de développement : compilé (Java, C, C++) ou interprété (Perl, Python, Bash).
// Dans le prochain chapitre, on va voir comment développer des applications web sous Linux. Et puisque c'est le dernier chapitre, on en profitera pour vous donner le mot de la fin !
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Développez des applications web ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// L.A.M.P : Linux, Apache, MySQL, PHP.
// Cet acronyme désigne un ensemble de logiciels libre pour créer un serveur web.
//      --> Le logiciel 'XAMPP' permet de regrouper ces logiciels en un seul endroit.
// -----------
//  - Découvrez les outils de développement web sous Linux :
// Ici, on va se pencher sur le développement web ! Et là encore, Linux dispose de tous les outils nécessaires, notamment avec l'acronyme LAMP (Linux, Apache, MySQL, PHP).
// Prenons un peu de temps pour découvrir chaque composant de cet acronyme :
//      - L pour Linux. Je n’ai rien à ajouter, vous connaissez Linux désormais ! C’est la brique Système d’exploitation de LAMP.
//      - A pour Apache. Ici, on associe le programme qui permet de faire un service web avec la fondation qui le fournit et le maintient : Apache (alors que le programme se nomme réellement HTTPD).
//      - M pour MySQL. Ici, c’est la brique Base de données.
//      - P pour PHP. Ici, c'est la brique Interpréteur, c'est-à-dire la technologie langage de LAMP. Mais là encore, l’histoire est bien faite, car le P fonctionne aussi pour Perl ou Python !
// Normalement, pour exploiter votre projet web, vous auriez à installer et configurer chacune de ces briques individuellement.
// Et je vous conseille fortement de faire ainsi sur des machines d’exploitation.
// Mais pour des environnements de développement, il existe des outils qui regroupent toutes ces briques. Une sorte de GROS package qui contient tout ce qu’il faut, prêt à l’emploi.
//      --> C’est très confortable pour se concentrer uniquement sur la partie code.
// Parmi ces outils, vous allez en trouver notamment pour Windows (WAMP) et pour macOS (MAMP).
// Celui que je vous propose d’installer est disponible quel que soit votre système, Windows, Linux ou macOS. Et il se nomme XAMPP.
// -----------
//  - Exploitez votre architecture LAMP :
// Alors, c’est parti, maintenant, nous allons installer XAMPP sur votre distribution Ubuntu.
// Il est nécessaire de suivre une procédure différente de ce que l’on a vu jusqu’à maintenant pour installer cette application. Pourquoi ?
//      --> Parce qu’elle n’est pas disponible sous la forme de package directement dans la distribution, et qu’elle n’est pas non plus disponible sous la forme de package en dehors de la distribution.
// Pas d’inquiétude, ici on va retrouver une procédure de laquelle vous êtes peut-être déjà familier, car elle ressemble beaucoup au traditionnel setup.exe de Windows.
//      --> Pour l'installer, nous téléchargeons le fichier .run, puis nous devons lui donner les droits de s'éxecuter.
//      --> Pour cela, nous allons dans le répertoire où se trouve le fichier puis entrons la commande suivante : 'sudo chmod +x [nom du fichier .run]'.
//      --> Une fois ceci fait, il ne suffit que de lancer le fichier .run à partir du terminal, puis de compléter l'installation pas à pas, de la même manière qu'avec un fichier .exe sous Windows.
// Maintenant que XAMPP est installé, nous allons voir quelles sont les principales fonctionnalités, et notamment celles qui permettent de rapidement construire votre premier projet de développement web !
// -----------
//  - À vous de jouer !
// Vous allez créer votre projet sous XAMPP !
// En vous appuyant sur les étapes décrites dans les vidéos ci-dessus, créez votre propre projet XAMPP, c’est-à-dire :
//      --> Vérifiez que les services de XAMPP sont bien démarrés, et notamment le service Apache Web Server. Ceci est accessible à partir de l'onglet 'Manage Servers'.
//      --> Créez un répertoire pour accueillir votre projet au bon endroit dans l’arborescence de XAMPP. Ceci est accessible via le bouton 'Open Application Folder' dans l'onglet 'Welcome'.
//              --> Nous pouvons aussi renommer 'manager-linux-x64.run' en 'xmanager.run', car ce fichier est celui dont nous allons nous servir, et il sera plus simple d'accès ainsi.
//              --> Le répertoire qui va nous intéresser dans un premier temps est 'htdocs', c'est dans celui-ci que nous allons pouvoir mettre nos projets.
//              --> Ici, nous pouvons créer un nouveau répertoire 'Projet1' qui va contenir notre nouveau projet.
//      --> Affectez les permissions nécessaires à ce répertoire, pour que votre compte utilisateur puisse lire et écrire dedans.
//              --> Pour cela, nous pouvons effectuer un clic droit sur notre répertoire et cliquer sur 'Properties'.
//              --> En regardant ses droits dans l'onglet 'Permissions' dans un premier temps, nous pouvons voir qu'il appartiens à 'root'. Ceci, car nous avons lancer XAMPP en tant que 'root'.
//              --> Donc quand nous avons ouvert le répertoire à partir de cette application, elle même lancée en tant que 'root', notre répertoire a été créé aussi en tant que 'root'.
//              --> Pour changer les droits et nous y autoriser il suffit de changer la partie 'Owner' à 'emile'.
//              --> Si nous souhaitions partager ce dossier sur le réseau local, de manière à ce qu'il puisse être accessible par d'autres machines, cela se passe dans l'onglet 'Local Neetwork Share'.
//              --> Si nous fermons tout et ouvrons un terminal, nous pouvons lancer XAMPP en tapant : 'sudo /opt/lampp/xmanager.run'.
//      --> Créez votre page d’accueil sous la forme d’un premier script PHP.
//              --> Dans un navigateur nous pouvons taper : 'localhost/dashboard'. Ceci nous ouvre un menu de base, intéressant pour accéder à la base de données.
//              --> Si nous requêtons 'localhost/Projet1', ceci nous ouvre une page 'indexOf /Projet1'.
//              --> Nous allons ajouter du contenu en ouvrant 'Geany'. Nous pouvons ajouter '<?php echo("Ca marche!") ?>' et l'enregistrer dans le répertoire pour lequel nous avons changé les droits.
//      --> Vérifiez que vous pouvez afficher votre page d’accueil depuis un navigateur.
//              --> A présent, nous pouvons afficher notre message PHP en requêtant dans un navigateur l'adresse 'localhost/Projet1/first.php'.
// Second exercice :
//      --> Nous pouvons ouvrir XAMPP.
//      --> Nous créons un dossier 'ProjetOC', et modifions ses droits pour pouvoir y écrire.
//      --> Ainsi, nous pouvons créer un fichier .php, et si nous l'appelons 'index.php' il sera ouvert par défaut.
//      --> Donc, dans un navigateur, nous pouvons requêter simplement 'localhost/ProjetOC'.
//      --> Si nous requêtons dans un terminal 'ln -s /opt/lampp/htdocs/ProjetOC /home/emile/ProjetOC', nous créons un raccourci vers notre dossier de Projet, au sein de notre répertoire utilisateur.
// -----------
//  - En résumé :
//      --> Vous disposez de tous les outils nécessaires pour développer des applications web sous Linux.
//      --> LAMP est l'acronyme historique pour Linux Apache MySQL et PHP.
//      --> XAMPP vous permet très facilement de déployer un environnement de développement LAMP.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Administrez un système Linux //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bienvenue dans ce cours sur l’administration Linux !
// Vous avez découvert Linux et vous souhaitez aller plus loin ? Alors vous êtes au bon endroit !
// Et si vous avez déjà utilisé Linux pour votre poste de travail, c’est super, mais maintenant vous allez pouvoir passer à l’étape supérieure.
// Dans ce cours, vous allez apprendre les bases de l’administration d’un système Linux, c’est-à-dire apprendre à l'utiliser pour un serveur.
// Aujourd’hui, la majorité des services web est hébergée sur un Linux. Comprendre comment cela fonctionne, concrètement, vous ouvrira des portes !
// Vous êtes prêt à vous lancer dans l’administration Linux ?
// --> Objectifs pédagogiques :
//          --> Utiliser le terminal et le shell.
//          --> Manipuler des fichiers.
//          --> Configurer un réseau.
//          --> Surveiller l’activité d’un système.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Utilisez le terminal et le shell sous Linux ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Tirez un maximum de ce cours //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  - Découvrez la structure du cours :
//      --> Dans la première partie, vous allez vous familiariser avec le terminal et le shell pour lancer vos premières commandes !
//      --> Dans la deuxième partie, vous allez apprendre à dompter l’arborescence du système Linux pour manipuler des fichiers.
//      --> Dans la troisième partie, vous verrez comment gérer le réseau pour :
//              - Le configurer.
//              - Vous connecter à distance.
//              - Transférer des fichiers.
//      --> Et dans la quatrième partie, vous allez apprendre à surveiller l’activité d’un système Linux.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Découvrez les terminaux Linux /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// En tant qu'administrateur de système Linux, notre outil principal sera le terminal de commandes. Mais pourquoi est-ce que ça s'appelle un terminal ?
// Durant les années 60-70, les ordinateurs sont tellement imposants qu'ils occupent l'espace d'une salle entière.
// Par conséquent, les opérateurs de ces monstres sont souvent situés dans un coin de cette salle, voire même dans une autre salle.
//      --> Pour intéragir avec ces machines, nous utilisons alors un petit équipement physique, qui ressemble à une machine à écrire ou à un Minitel. Il est équipé d'un clavier et d'un écran.
//              --> Nous les appelons terminal, car ils se trouvaient à l'extrémité de ces gros systèmes.
// Avec le temps, les ordinateurs ont évolué, et les terminaux avec eux, à tel point qu'aujourd'hui, il n'est plus nécessaire qu'un terminal soit un équipement à part entière.
//      --> Un logiciel suffit, nous parlons alors d'un 'émulateur de terminal', ou d'un 'terminal virtuel'.
// En fait, c'est un programme, qui reproduit le comportement des anciens boitiers physiques. Il y a deux gros avantages à cela :
//      --> La possibilité de se connecter à distance.
//      --> La possibilité de lancer plusieurs émulateurs de terminal en simultané.
// Si nous avons déjà essayé de démarrer un système Linux serveur, nous nous sommes retrouvés devant un écran noir avec une interface de connexion assez austère.
//      --> C'est ce que nous appelons une console. Ce n'est ni plus, ni moins qu'un terminal, il est uniquement en mode texte et occupe tout l'espace de l'écran disponible.
// Linux propose 7 terminaux, dits 'physiques', c'est parce qu'ils sont accessibles uniquement lorsque nous sommes en face du serveur et non à distance.
// Ils sont gérés par sa console via les combinaisons de touches contrôle : Ctrl + Alt + F1, F2, F3, F4, F5, F6 & F7.
// Alors, avec quoi allons-nous travailler sur notre serveur Linux ?
//      --> Lorsque nous sommes uniquement devant l'écran avec un clavier, nous allons utiliser les sept terminaux physiques gérés par la console.
//      --> Lorsque nous sommes à distance, via le réseau, nous allons utiliser un émulateur de terminal, c'est à dire un programme que nous allons lancer sur notre poste de travaiL.
// Sous Windows, Linux ou MacOS, nous trouverons forcément chaussure à notre pied.
// XFCE Terminal ou GNOME Terminal sont de bons émulateurs pour démarrer sous Linux. MacOS fournit son terminal natif, qui est aussi très bien, pour Windows, PuTTY, est un 'must have'.
// D'ailleurs, si nous travaillons sur Windows, nous allons nous retrouver sur notre bureau avec la console Linux via la machine virtuelle et notre émulateur de terminal connecté à ce serveur Linux.
// Attention à ne pas confondre les deux, car nous allons probablement essayer de faire des copier-coller de commandes d'un terminal à l'autre, mais ça ne fonctionnera pas !
// Dans un cas, nous sommes virtuellement physiquement devant la machine, alors que dans l'autre, nous sommes virtuellement connectés à distance.
// -----------
//  - Plongez dans l’histoire du terminal :
// Dans la grande majorité des cas, les serveurs Linux que vous allez administrer sont dépourvus d'interfaces graphiques.
// Elles ne sont pas nécessaires pour exploiter les services hébergés sur ces machines.
// Pour interagir avec le système et le matériel, l'administrateur Linux utilise alors un terminal.
// Mais figurez-vous que, dans les années 60-70, un ordinateur occupait l'espace d'une pièce entière.
// Ces ordinateurs étaient tellement volumineux que les opérateurs étaient souvent situés dans une autre salle !
// Ils communiquaient avec les machines et les systèmes via des équipements dédiés à cet effet : les terminaux.
// Avec l'évolution des technologies, le terminal s'est rapproché de la machine, mais restait tout de même un équipement dissocié.
// Le terminal informatique désignait alors un équipement périphérique entrée/sortie (au sens propre du terme, c'est-à-dire en périphérie du matériel principal) permettant d'opérer le système.
// Il pouvait posséder un clavier, un écran avec un pointer, une imprimante même.
// Imaginez un gros minitel, et vous aurez une bonne image du matériel en question.
// Bien entendu, les choses ne sont pas restées en l'état : les terminaux physiques ont laissé la place aux terminaux virtuels, ou émulateurs de terminaux.
// Aujourd'hui, il est commun de virtualiser du matériel informatique sur un équipement. Ainsi, sur un serveur VMware il est possible d'héberger plusieurs machines virtuelles.
// Si vous avez besoin de plus d’informations à ce sujet, vous pouvez consulter le cours Virtualisez votre architecture et vos environnements de travail.
// -----------
//  - Appréhendez la virtualisation des terminaux de commande :
// L'idée, c’est de passer par le logiciel pour émuler (ou simuler) l'équipement terminal physique et toutes ses fonctionnalités.
// Ce logiciel est souvent un petit programme qui se lance sur un système d'exploitation et qui permet de se connecter localement ou à distance sur le serveur à administrer.
//      --> Il devient donc possible de lancer plusieurs terminaux simultanément depuis le même environnement !
//              --> Le protocole VNC (Virtual Network Computing) permet notamment de prendre la main à distance sur un ordinateur. C’est un protocole de terminal virtuel graphique.
//              --> Le protocole RDP (Remote Desktop Protocol) qui permet de se connecter sur des serveurs Windows Terminal Serveur en est un également.
// L'écran noir assez austère que vous obtenez après le démarrage du système est aussi un terminal. On l’a nommé historiquement une console.
// La console sous Linux est un périphérique gérant le clavier et l'écran de l'ordinateur et propose d'interagir avec l'utilisateur via un terminal en mode texte.
// À vrai dire, la console de Linux propose 7 terminaux en mode texte, appelés aussi les terminaux physiques.
// Ils sont directement sur le clavier branché à l'ordinateur et disponibles à partir des combinaisons de touches : “CTRL+ALT+F1” ; “CTRL+ALT+F2” ; … jusqu’à “CTRL+ALT+F7”.
// Chacune de ces combinaisons de touches propose l'émulation d'un terminal (en mode console) différent.
// Sur ces derniers, il est possible de se connecter de manière indépendante avec un compte utilisateur différent.
// -----------
//  - Découvrez les principaux émulateurs de terminal :
// Dans la grande majorité des cas, vous serez connecté à distance sur votre serveur Linux via un émulateur de terminal.
// Il s’agit d’un programme lancé sur votre poste de travail Windows/Mac ou même Linux. Il gère la connexion au serveur distant avec un protocole réseau (telnet, rlogin ou SSH).
// En fonction du système d'exploitation de votre poste de travail, vous aurez le choix entre différents émulateurs offrant diverses fonctionnalités.
//      --> PuTTY sous Windows : il est à la fois un émulateur de terminal et un client pour différents protocoles réseau tels que telnet, SFTP, SSH, rlogin, et TCP.
//      --> Terminal sous macOS : MacOS est un dérivé de la branche historique BSD (Berkeley Software Distribution) des Unix communautaires universitaires.
//              L'émulateur de terminal est ainsi dans un milieu natif : l'application est livrée par défaut avec le système.
//      --> xterm sous Linux : xterm, c'est un peu le papy de la famille. Ce programme émule les terminaux VT102/VT220 de DEC (Digital Equipment Corporation).
//              Ce sont les successeurs du terminal VT100 illustré un peu plus haut. Beaucoup d'émulateurs présentés dans cette section sont des variantes de xterm.
// Sous Linux, il existe d’autres émulateurs qu'il me paraît intéressant de citer ici :
//      --> GNOME propose GNOME Terminal. C’est un grand classique également qui, outre les fonctionnalités de son grand-père, est livré avec la gestion des onglets.
//              Il propose aussi la transparence et les fonctions de drag and drop notamment. La page de documentation sur le site gnome.org est très bien faite !
//      --> KDE propose l'émulateur Konsole, qui réécrit toutes les fonctionnalités de xterm, avec des ajouts assez intéressants.
//              Par exemple, son intégration native dans divers outils de développement tels que KDevelop, Kate, ou encore l'explorateur de fichier Dolphin.
//      --> xfce-terminal a été développé pour remplacer GNOME Terminal et propose les fonctionnalités essentielles.
//              Comme ses cousins mais sans dépendance à tel ou tel environnement de bureau (GNOME ou KDE par exemple). Il est donc très léger. Il est livré par défaut avec XFCE.
//      --> urxvt, mon terminal préféré, ce programme est la suite logique de xterm épuré des fonctionnalités jugées non indispensables.
//              Donc, c'est difficile de faire plus léger ! Outre le fait de pouvoir le lancer en arrière-plan en tant que démon (ou daemon) il propose également les fonctionnalités classiques.
//              Comme par exemple la gestion des couleurs et des onglets lorsque nécessaire notamment.
// L'émulateur de terminal (ou encore plus simplement, “le terminal”) est l'outil de prédilection de l'administrateur de systèmes Unix/Linux.
// Il est interactif nativement avec le poste de travail qui le fait tourner et permet de :
//      - Se connecter avec un protocole réseau sur le serveur distant autant de fois que souhaité.
//      - Y compris plusieurs fois sur le même serveur avec des utilisateurs différents (dans la limite de connexions simultanées configurées sur chaque serveur).
// Quel bonheur de pouvoir copier/coller directement tout un script Perl dans le bon fichier.
// Ou encore de sélectionner une partie du résultat d'une commande et de la transférer dans un document bureautique.
// Avec un émulateur de terminal, le pointeur, la souris, ou les raccourcis clavier classiques sont très confortables.
// -----------
//  - Comprenez les interactions entre les terminaux virtuels et les hyperviseurs de type 1 et 2 :
// Comment sont gérés les terminaux virtuels dans un environnement Linux virtualisé ?
//      --> L'installation d'un serveur Linux sur un hyperviseur de niveau 1 ne change rien.
//      --> L'installer sur un hyperviseur de niveau 2 peut en revanche créer quelques ambiguïtés.
// En effet, l'hyperviseur de niveau 2 par exemple VirtualBox d'Oracle va proposer l'affichage de la console et des terminaux physiques de manière virtuelle :
//      --> L'une étant la console, elle 'xapture' votre souris lorsque vous cliquez dedans, et vous êtes virtuellement considéré devant le serveur Linux avec le clavier.
//              L'écran géré par la console et 7 terminaux physiques à votre disposition.
//      --> L'autre est l'émulateur de terminal, intégré nativement dans l'environnement graphique de votre poste de travail.
//              Il ne 'capture' pas votre souris, mais permet au contraire le copier/coller etc.
// -----------
//  - En résumé :
//      --> Le terminal est l’outil de prédilection de l’administrateur Unix/Linux.
//      --> Lorsque vous êtes physiquement devant la machine, vous utilisez une des 7 consoles proposées par Linux.
//      --> Pour vous connecter à distance sur votre serveur Linux, vous utilisez un émulateur de terminal.
//      --> Il existe des émulateurs de terminal pour Windows, macOS et bien sûr Linux.
// Terminal, émulateur de terminal, console. Avec ces outils, vous pouvez vous connecter localement ou à distance sur le serveur Linux à administrer.
// Quelle que soit la version du logiciel que vous allez utiliser, il vous faudra interagir avec le système en mode texte, c'est-à-dire saisir des commandes.
// Ce processus est assuré au moyen d'un shell que nous allons découvrir dans le prochain chapitre.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initiez-vous au shell, l’interpréteur de commandes ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Maintenant que nous sommes au point avec la notion de 'terminal' et de 'console', il est temps d'utiliser ces outils pour interagir avec notre serveur Linux.
//      --> Pour cela, il nous faut parler le langage du système, ce qui revient à utiliser un interpréteur de commandes que nous appelons aussi 'Shell'.
// Le Shell est un programme qui est lancé par le système, juste après la phase d'authentification sur un terminal.
// Ce programme permet à l'administrateur de saisir des commandes et d'afficher leurs résultats.
// Quoi qu'il en soit, en fonction du système d'exploitation sur lequel nous sommes connectés, il est possible que le Shell exécuté ne soit pas tout à fait le même. Il peut s'agir :
//      --> Bourne shell.
//      --> Korn shell.
//      --> C shell.
// --> Sous Linux, la référence est le 'Bash'. C'est un shell qui regroupe les meilleures fonctionnalités des autres.
//      --> L'auto-complétion avec 'Tab'.
//      --> La gestion des signaux, qui permet notamment d'utiliser 'Ctrl + C' pour terminer une commande si le traitement est trop long ou s'il ne correspond pas à ce que nous attendons.
//      --> La gestion du code de terminaison des commandes, qui est pratique pour interpréter automatiquement les conditions de sortie d'une commande.
// En effet, les traitements produisent des codes de sortie :
//      --> 0 : Tout va bien.
//      --> 1 : Quelque chose ne va pas.
// Le Bash permet alors de stocker ces codes de sortie dans une variable, qui peut être exploitée automatiquement.
// -----------
// Selon vos préférences vous avez peut-être déjà choisi votre émulateur de terminal et vous êtes prêt à exécuter vos premières actions d'administration.
// Mais pour cela, il va falloir parler le langage de Linux, c'est-à-dire utiliser un interpréteur de commandes, communément appelé shell.
// -----------
//  - Découvrez shell, ses origines, ses objectifs :
// Le shell est l'outil de communication privilégié entre l'administrateur et le système.
//      --> Mais c’est quoi exactement le shell ?
// C'est un programme qui est exécuté lors de la connexion de l'administrateur sur une console ou un terminal. Il présente une interface en mode texte qui permet de saisir des commandes.
// Le libellé shell, signifiant “coquille”, désigne probablement la première couche logicielle entourant le noyau, comme une coquille de noix entoure sa noix.
// Le shell étant un programme en soi, il dispose de son propre protocole de communication.
//      --> Ainsi l'administrateur sera obligé de saisir les commandes sur un format qui est adapté et compréhensible par cet interpréteur de commandes.
//      --> Et à quoi ça sert, cet interpréteur de commandes ?
// Le rôle principal du shell est d'exécuter les commandes saisies par l'administrateur lui permettant d'effectuer des appels systèmes vers le noyau.
// Mais l'interpréteur de commandes fournit également d'autres fonctionnalités essentielles permettant de faciliter la tâche de l'administrateur.
// Par exemple, la possibilité de traiter de manière automatique les résultats des commandes saisies, ou encore de rediriger ces informations dans des fichiers ou vers d'autres commandes.
// Nous reviendrons un peu plus loin dans ce chapitre sur les principales fonctionnalités du shell.
// -----------
//  - Découvrez les principaux shells sous Linux :
// Le premier shell apparaît dans les années 70, suivant rapidement la création des premiers systèmes Unix.
// Ken Thompson, l'un des créateurs de Unix, invente son propre shell en 1971 et le nomme Thompson shell.
// En 1977, Stephen Bourne écrit le Bourne shell qui devient une référence en matière d'interpréteur de commandes, avec des fonctionnalités très intéressantes dont les plus notables sont :
//      --> L'écriture de fichiers contenant des suites de commandes, les fameux scripts sh (l'extension sh est un préfixe pour shell).
//      --> L'intégration d'un langage de programmation, avec des structures conditionnelles, itératives et la gestion des variables.
//      --> La gestion des canaux d'entrée/sortie et des redirections via des tubes.
//      --> La gestion de l'exécution de commandes en substitution avec les caractères back quotes : ``.
//      --> Etc.
// D'autres shells sont venus ensuite compléter la petite famille des interpréteurs de commandes pour systèmes Unix/Linux, je peux notamment citer :
//      - Le C Shell, qui dispose d'un langage très proche du langage C (le langage natif des systèmes Unix/Linux) et donc très populaire pour cette raison.
//      - Le KornShell, développé plus tard, début des années 80, apporte de son côté une amélioration du C Shell avec une intégration d'autres langages.
//          Comme par exemple le Perl, le TCL par exemple, le support de tableaux associatifs, etc.
// Sous Linux, le shell standard est le Bash (pour Bourne Again Shell). Développé plutôt fin des années 80, cet interpréteur de commandes est un peu un condensé du meilleur de tous ses ancêtres.
// -----------
//  - Découvrez Bash, le shell standard de Linux :
// Le shell exécuté lors de la connexion d'un utilisateur sur un terminal est configuré dans le fichier '/etc/passwd'.
// Par exemple, pour afficher le shell utilisé par mon compte de connexion sur ma machine Linux, je peux lancer la commande suivante dans un terminal :
//      --> grep seb /etc/password.
// Le shell exécuté à la connexion de l'utilisateur est indiqué dans le champ numéro 7 (dernier champ) Les champs sont séparés par des ':'.
// Le shell exécuté à la connexion de l'utilisateur est indiqué dans le dernier champ (les champs sont séparés par des :).
//      --> Petite astuce : modifier le fichier '/etc/passwd' et indiquer un interpréteur de commandes comme '/usr/bin/nologin' ou '/dev/zero ou encore /dev/null'.
//              Cela garantit que l'utilisateur ne pourra jamais lancer de shell à la suite du processus d'authentification lors de la connexion.
// Bash est un programme écrit en C, visant à respecter au maximum les standards POSIX concernant les interpréteurs de commandes.
// Il est livré en standard sur la plupart des distributions Linux SystemV/d (Les distributions BSD implémentent plutôt C Shell par défaut).
// Il est compatible avec “presque toutes les versions de Unix” et est disponible également pour Windows !
// Mais ça veut dire que je n’ai pas le choix du shell, finalement ? Et il a quoi de spécial par rapport aux autres ?
// Si, vous avez le choix : souvenez-vous que Linux est plutôt du genre à ne rien imposer.
// C’est seulement que Bash est une variation avancée de Bourne shell, toutes les fonctionnalités de son célèbre aïeul sont évidemment disponibles.
// Mais, il propose également d'autres fonctionnalités dont vous ne pourrez plus vous passer :
//      --> Command linecompletion : Ce mécanisme permet à l'interpréteur de commandes de compléter automatiquement une saisie à partir des premiers caractères saisis.
//              L'administrateur déclenche cette fonctionnalité en frappant la touche TAB pendant la saisie et Bash essaie de compléter la saisie en fonction de son sens :
//                  --> Un chemin, une commande, un argument, une option, etc.
//      --> Signal handling : Les signaux sont une forme de communication entre processus. Ils permettent d'émettre et de recevoir un ordre ou une information pendant leur exécution.
//              L'exemple le plus connu est sûrement l'interruption clavier composée de la frappe des touches CTLR+C qui permet d'émettre le signal sigint (numéro 2).
//              Si le processus écoute sur ce signal, il reçoit alors l'ordre d'interruption et se termine proprement.
//      --> Exit code : L'interpréteur de commandes Bash permet de récupérer le code de sortie d'un programme dans une variable nommée.
//              Ce mécanisme est très pratique pour interpréter le code et déterminer dans quelle condition le programme s'est terminé.
// -----------
//  - En résumé :
// Dans ce chapitre, vous avez :
//      --> Compris en quoi consiste un interpréteur de commandes.
//      --> Découvert quelques shell connus.
//      --> Appris que le shell exécuté après l’étape d’authentification est configuré dans le fichier '/etc/passwd'.
//      --> Fait connaissance avec le shell standard de Linux : Bash.
// Dans le chapitre suivant, je vous propose de mettre en pratique ces notions et de passer un peu de temps sous Bash pour effectuer vos premières actions d'administration.
// -----------

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Lancez des commandes sous Bash ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Passons à la pratique : nous allons explorer les différentes fonctionnalités de Bash, directement depuis un terminal de commandes.
// -----------
//  - Utilisez le prompt et consultez ses variables :
// Une fois passées les étapes de connexion/authentification via une console ou un terminal, vous vous retrouvez devant cette interface assez austère qui vous présente un prompt.
// Cette interface, le prompt, affiche déjà quelques informations intéressantes. Sur l'illustration ci-dessus par exemple, on voit que :
//      - Je suis connecté avec l'utilisateur seb sur un équipement dont le "hostname" est thor.
//      - Je me situe actuellement dans le répertoire personnel de l'utilisateur, symbolisé par le caractère '~'.
//              --> Le dernier caractère '$' est le 'delimiter'. Il n'est pas innocent non plus : il m'indique ici que je suis un utilisateur non privilégié.
//              --> Avec le compte 'root', le caractère serait un '#'.
// Enfin, en fonction des distributions, un curseur, éventuellement de couleur et/ou clignotant, vous indique la position actuelle de la saisie.
// Toute cette configuration n'est pas magique. Elle est stockée dans un fichier et dans une variable gérée par le shell Bash. En l'occurrence, cette variable est nommée '$PS1'.
// Je vous propose de consulter et de modifier cette variable pour adapter votre prompt.
// Et puis on en profite au passage pour s’intéresser à une seconde variable '$SHELL',  qui vous dit sur quel shell vous êtes connecté. C’est parti !
// -----------
// La première chose à faire est donc d'ouvrir un terminal. Nous pouvons constater que nous avons déjà certaines information sur le 'prompt' : 'emile@Ubuntu22:~$'.
//      --> 'emile' : nom d'utilisateur.
//      --> '@' : indique un séparateur.
//      --> 'Ubuntu22' : correspond au nom de notre machine.
//      --> ':'.
//      --> '~' : nous indique dans quel répertoire nous sommes, ici '~' est un raccourci pour dire que nous sommes dans le répertoire personnel de l'utilisateur '/home/emile'.
//      --> '$' : indique que nous sommes un utilisateur sans privilège. Si nous étions connectés en tant que 'root', ça aurait été un '#'.
// Toutes ces informations sont stockées dans une variable 'PS1'.
//      --> Nous pouvons l'afficher en tapant 'echo $PS1'.
// 
// -----------











// -----------




// -----------