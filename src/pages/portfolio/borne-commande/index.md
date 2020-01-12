---
path: '/borne-commande'
title: 'Borne de commande'
description: 'Borne de commande réalisé durant mon travail chez SmartFizz'
image: 'images/borne.png'
techno: 'Angular, Electron'
---

Ici il s’agit du projet principal sur lequel je travaille chez <span style="color:#38b2ac">**SmartFizz.**</span>  <br><br>
J’ai été embauché pour concevoir et développer une application tactile. Cette application est disponible sur une borne que nous fabriquons localement. Elle est dédiée aux métiers de la restauration et de divers loisirs (bars, bowlings....)  <br><br>
  
<span style="color:#38b2ac"> **Technologies utilisées** </span>: <span style="color:#38b2ac">**Angular 8**</span> et <span style="color:#38b2ac">**Electron**</span>.  <br><br>
  
<span style="color:#38b2ac"> **Pourquoi ces technologies** ? </span> Il nous fallait une technologie comme **Electron** pour pouvoir communiquer avec les ports Serials. En effet notre application doit pouvoir communiquer avec une imprimante embarquée ainsi qu’un terminal de paiement bancaire. De plus il fallait que notre application puisse tourner sur un environnement Linux.  
Pour **Angular** il fallait rester cohérent avec les technologies maitrisées par l’équipe.  
A la base j’avais aussi pensé à Flutter mais encore un peu jeune au niveau de la communauté. <br><br> 
  
En plus de cette application j’ai dû réaliser 3 modules supplémentaire.<br><br>

● Un module de communication entre une imprimante et une application Electron. Communication selon la norme ESCPOS.<br><br>

● Un module de communication entre une Caisse POKKY et notre application Electron.<br><br>

● Un module de communication entre notre application Electron et un terminal de paiment INGENICO. <br><br> 

Ces modules sont des packages privées car utilisés dans un but commercial. On réfléchit pour mettre celui de l’imprimante et de paiement en open source.
