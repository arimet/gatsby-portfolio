import React from "react"
import { FaMapMarkerAlt, FaRegCalendarAlt } from 'react-icons/fa';

import Layout from "../components/layout"
import SEO from "../components/seo"
import Nav from "../components/nav"

const Works = () => {
  return (
    <Layout>
      <SEO title="Works" />
      <div className="h-screen flex flex-col items-center justify-center">
        <div className=" flex flex-1 flex-col container overflow-scroll p-10">
          <div className="worksContainer mb-12 px-10 border-dashed border-l border-gray-600">
            <h1 className="text-3xl font-semibold mb-2">SmartFizz</h1>
            <div className="flex items-center justify-between mb-2 text-gray-600 text-xl">
              <h2 className="">Lead Front end</h2>
              <div className="flex">
                <p className="flex items-center justify-start mr-4"><FaMapMarkerAlt className="inline mr-1" />Nancy</p>
                <p className="flex items-center justify-start"><FaRegCalendarAlt className="inline mr-1" />2019</p>
              </div>
            </div>
            <hr className="mb-4 border-solid border-b border-gray-500" />
            <p className="text-gray-800">
            <b>Réalisation d'une interface admin Angular :</b><br/>
              - Développement d’une interface de gestion de carte/menu à destination des métiers de la restauration. <br/>
              - Développement de nouvelles fonctionnalités. Maintenance des problèmes rencontrés.  <br/>
              - Utilisation principale d’ Angular<br/><br/>

            <b>Réalisation d'une borne de commande tactile Angular - Electron :</b><br/>
              - Développement d’une borne de commande tactile à destination des métiers de la restauration. <br/>
              - Utilise la carte définie par le gérant via l’interface admin<br/>
              - Développement de modules permettant la connexion entre la borne et une imprimante, une caisse enregistreuse et un terminal de paiement.<br/>
              - Angular – Electron <br/><br/>

            <b>Développement d’une application de covoiturage VueJS</b>

            </p>
          </div>


          <div className="worksContainer mb-12 px-10 border-dashed border-l border-gray-600">
            <h1 className="text-3xl font-semibold mb-2">Neo-nomade</h1>
            <div className="flex items-center justify-between mb-2 text-gray-600 text-xl">
              <h2 className="">Développeur end</h2>
              <div className="flex">
                <p className="flex items-center justify-start mr-4"><FaMapMarkerAlt className="inline mr-1" />Nancy</p>
                <p className="flex items-center justify-start"><FaRegCalendarAlt className="inline mr-1" />2016 - 2019</p>
              </div>
            </div>
            <hr className="mb-4 border-solid border-b border-gray-500" />
            <p className="text-gray-800">
              <b>Réalisation d'une version deux de l'application mobile Neo-Nomade. (2017) :</b><br/>
                - Une volonté de refondre l'appli existante en Ionic pour la rendre plus performante. Après un benchmark le choix de la technologique s'est posé sur react-native.<br/> 
                - Re-création from scratch des fonctionnalités existantes.<br/>
                - Formation et veille continue sur la technologie. <br/>
                - Création de nouvelles fonctionnalités propre à l'application mobile. <br/>
                - Utilisation de react-native et d'une api PHP. <br/><br/>

                <b>Développement des différents modules qui composent Neo-Nomade en mission continue :</b><br/>
                - Front utilisateur : Mise à jour de l'interface utilisateur. Développement de nouvelles fonctionnalités. Maintenance des problèmes rencontrés. <br/>
                - Back office espace : Mise en place d'un onBoarding utilisateur pour la création d'un espace et l'affiliation de celui-ci. <br/>
                - Technologies web HTML/JS (JQuery)/CSS/PHP/Solr<br/><br/>

                <b>Réalisation d'une première application Mobile. (2016) :</b><br/>
                - Réalisation d'une application mobile reprenant les fonctionnalités du site Neo-Nomade. <br/>
                - Création d'une Api en PHP pour que l'application puisse interroger les informations stockés en base. <br/>
                - Utilisation de Ionic - AngularJs - PHP<br/>
            </p>
          </div>


          <div className="worksContainer mb-12 px-10 border-dashed border-l border-gray-600">
            <h1 className="text-3xl font-semibold mb-2">ArtiCom</h1>
            <div className="flex items-center justify-between mb-2 text-gray-600 text-xl">
              <h2 className="">Stagiaire Développeur end</h2>
              <div className="flex">
                <p className="flex items-center justify-start mr-4"><FaMapMarkerAlt className="inline mr-1" />Commercy</p>
                <p className="flex items-center justify-start"><FaRegCalendarAlt className="inline mr-1" />2015</p>
              </div>
            </div>
            <hr className="mb-4 border-solid border-b border-gray-500" />
            <p className="text-gray-800">
              Réalisation d'un module de chèque cadeau en PHP.<br/> 
              Intégration Wordpress - Conception de site web<br/>
            </p>
          </div>

          <div className="worksContainer mb-12 px-10 border-dashed border-l border-gray-600">
            <h1 className="text-3xl font-semibold mb-2">IUT Nancy Charlemagne</h1>
            <div className="flex items-center justify-between mb-2 text-gray-600 text-xl">
              <h2 className="">LP CISIEE (Bac +3)</h2>
              <div className="flex">
                <p className="flex items-center justify-start mr-4"><FaMapMarkerAlt className="inline mr-1" />Nancy</p>
                <p className="flex items-center justify-start"><FaRegCalendarAlt className="inline mr-1" />2013 - 2016</p>
              </div>
            </div>
            <hr className="mb-4 border-solid border-b border-gray-500" />
            <p className="text-gray-800">
              Concepteur-Intégrateur de systèmes Intranet/Internet pour l’Entreprise<br/> 
            </p>
          </div>
        </div>
        <Nav activeLink='works' />
      </div>
    </Layout>
  )
}

export default Works
