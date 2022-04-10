import img1 from '../Assets/lecoinfeemain.png'
import img2 from '../Assets/Trouv-ton-velo.png'
import img3 from '../Assets/gradient.png'
import img4 from '../Assets/todolist.png'
import img5 from '../Assets/converter.png'

const works = [
    {
        id: 1,
        title: 'Le Coin Fee main',
        description: 'Version mobile pour une petite entreprise',
        link: "https://lecoinfeemain.surge.sh/",
        picture: img1,
        skill: <i class="fab fa-react"></i>,
        dev: true
    },
    {
        id: 2,
        title: 'Trouv ton vélo',
        description: 'Projet de fin de formation. Vous avez un vélo ou vous souhaitez en louer un à un particulier ? C\'est par ici !',
        link: "https://trouv-ton-velo.surge.sh/",
        picture: img2,
        skill: <i class="fab fa-react"></i>,
        dev: false
    },
    {
        id: 3,
        title: 'Gradient',
        description: 'Vous cherchez une couleur ? Projet réalisé avec React/Redux',
        link: "https://gradientxiii.surge.sh/",
        picture: img3,
        skill: <i class="fab fa-react"></i>,
        dev: false
    },
    {
        id: 4,
        title: 'Todolist',
        description: 'Des choses à faire ? ',
        link: "https://todolistxiii.surge.sh/",
        picture: img4,
        skill: <i class="fab fa-react"></i>,
        dev: false

    },
    {
        id: 5,
        title: 'Converter',
        description: 'Besoin de convertir une devise ?',
        link: "https://converterxiii.surge.sh/",
        picture: img5,
        skill: <i class="fab fa-react"></i>,
        dev: false
    },
    
]

export default works;