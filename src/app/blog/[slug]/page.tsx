"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import Link from "next/link";
import { ArrowLeft, Calendar, User, Tag, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const blogPosts = [
  {
    id: 1,
    title: "Les meilleures pratiques pour créer un site web professionnel",
    excerpt:
      "Découvrez comment créer un site web qui inspire confiance et attire des clients potentiels.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1470",
    date: "10 Mai 2025",
    author: "Sophie Martin",
    category: "Design Web",
    slug: "meilleures-pratiques-site-web-professionnel",
    readTime: "5 min",
    content: `
    <p class="mb-4">Dans le monde professionnel d'aujourd'hui, un site web de qualité est essentiel pour établir sa crédibilité et attirer de nouveaux clients. Que vous soyez consultant, médecin, avocat ou autre professionnel indépendant, votre présence en ligne reflète directement votre image de marque.</p>
    
    <h2 class="text-2xl font-semibold my-6">1. Privilégiez un design épuré et professionnel</h2>
    <p class="mb-4">Un design surchargé peut rapidement rebuter vos visiteurs. Optez pour un style minimaliste qui met en valeur votre contenu et facilite la navigation. Utilisez des couleurs qui correspondent à votre domaine professionnel et qui inspirent confiance.</p>
    <p class="mb-4">Les espaces blancs sont vos amis ! Ils permettent de structurer visuellement votre site et d'améliorer la lisibilité. N'hésitez pas à laisser "respirer" votre contenu.</p>
    
    <h2 class="text-2xl font-semibold my-6">2. Optimisez votre site pour les mobiles</h2>
    <p class="mb-4">Plus de 60% des recherches web se font désormais depuis un smartphone. Si votre site n'est pas adapté aux écrans mobiles, vous risquez de perdre une part importante de visiteurs potentiels.</p>
    <p class="mb-4">Assurez-vous que votre site utilise un design responsive qui s'adapte automatiquement à tous les types d'écrans. Testez-le sur différents appareils pour garantir une expérience utilisateur optimale.</p>
    
    <h2 class="text-2xl font-semibold my-6">3. Créez un contenu de qualité</h2>
    <p class="mb-4">Le contenu est roi ! Proposez des informations utiles et pertinentes pour vos visiteurs. Présentez clairement vos services, votre expertise et ce qui vous distingue de la concurrence.</p>
    <p class="mb-4">N'hésitez pas à inclure des témoignages clients, des études de cas ou des exemples de projets réussis pour renforcer votre crédibilité.</p>
    
    <h2 class="text-2xl font-semibold my-6">4. Facilitez le contact</h2>
    <p class="mb-4">Rendez votre formulaire de contact facilement accessible depuis n'importe quelle page. Indiquez clairement vos coordonnées et vos disponibilités.</p>
    <p class="mb-4">Si vous proposez des consultations, intégrez un système de prise de rendez-vous en ligne pour simplifier la démarche de vos clients potentiels.</p>
    
    <h2 class="text-2xl font-semibold my-6">5. Optimisez pour les moteurs de recherche</h2>
    <p class="mb-4">Un site magnifique ne sert à rien si personne ne le trouve ! Travaillez votre référencement (SEO) en utilisant des mots-clés pertinents pour votre activité.</p>
    <p class="mb-4">Créez régulièrement du contenu frais via un blog pour améliorer votre visibilité sur les moteurs de recherche et montrer votre expertise dans votre domaine.</p>
    
    <h2 class="text-2xl font-semibold my-6">Conclusion</h2>
    <p class="mb-4">Votre site web est souvent le premier contact qu'un client potentiel aura avec vous. En suivant ces bonnes pratiques, vous vous assurez de faire une excellente première impression et de convertir vos visiteurs en clients.</p>
    <p class="mb-4">Chez Profelio, nous proposons des templates spécifiquement conçus pour les professionnels, qui intègrent toutes ces bonnes pratiques. N'hésitez pas à explorer notre galerie pour trouver le modèle qui correspond le mieux à votre activité.</p>
    `,
  },
  {
    id: 2,
    title: "Comment choisir le bon template pour votre profession",
    excerpt:
      "Le choix du bon template est essentiel pour représenter correctement votre activité professionnelle.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1470",
    date: "2 Mai 2025",
    author: "Thomas Durand",
    category: "Templates",
    slug: "choisir-template-profession",
    readTime: "4 min",
    content: `
    <p class="mb-4">Choisir le bon template pour votre site web professionnel n'est pas une décision à prendre à la légère. Votre site est le reflet numérique de votre activité et doit transmettre les bonnes impressions dès les premières secondes.</p>
    
    <h2 class="text-2xl font-semibold my-6">Comprendre votre audience cible</h2>
    <p class="mb-4">Avant de vous lancer dans la sélection d'un template, prenez le temps de définir précisément qui sont vos clients idéaux. Quelles sont leurs attentes ? Quelles impressions souhaitez-vous leur donner ?</p>
    <p class="mb-4">Un avocat spécialisé en droit des affaires n'aura pas les mêmes besoins qu'un photographe de mariage ou qu'un médecin généraliste. Chaque profession a ses codes visuels et ses standards.</p>
    
    <h2 class="text-2xl font-semibold my-6">Analyser les spécificités de votre secteur</h2>
    <p class="mb-4">Explorez les sites de vos confrères et concurrents pour identifier les éléments récurrents qui semblent faire consensus dans votre domaine. Cela vous donnera une base solide pour votre propre site.</p>
    <p class="mb-4">Certains secteurs privilégient la sobriété et le formalisme (juridique, finance), tandis que d'autres valorisent la créativité et l'originalité (design, communication).</p>
    
    <h2 class="text-2xl font-semibold my-6">Les critères essentiels à considérer</h2>
    <p class="mb-4">Lors de votre sélection, prêtez attention aux points suivants :</p>
    <ul class="list-disc ml-6 mb-4">
      <li class="mb-2"><strong>Fonctionnalités spécifiques</strong> : Avez-vous besoin d'un système de prise de rendez-vous, d'un portfolio, d'une section FAQ, d'une boutique en ligne ?</li>
      <li class="mb-2"><strong>Structure et navigation</strong> : Le template propose-t-il une organisation logique qui correspond à votre type d'activité ?</li>
      <li class="mb-2"><strong>Personnalisation</strong> : Pourrez-vous adapter facilement les couleurs, polices et autres éléments visuels à votre identité ?</li>
      <li class="mb-2"><strong>Responsive design</strong> : Le template s'adapte-t-il parfaitement à tous les appareils ?</li>
      <li class="mb-2"><strong>Vitesse de chargement</strong> : Un template trop lourd peut faire fuir vos visiteurs.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold my-6">Nos recommandations par secteur</h2>
    <p class="mb-4">Chez Profelio, nous avons développé des templates spécifiques pour différentes professions :</p>
    <ul class="list-disc ml-6 mb-4">
      <li class="mb-2"><strong>Pour les professions médicales</strong> : Privilégiez des designs épurés avec des tons bleus ou verts qui inspirent confiance et sérénité.</li>
      <li class="mb-2"><strong>Pour les avocats et juristes</strong> : Optez pour des templates structurés avec des couleurs sobres (bleu foncé, bordeaux) qui transmettent autorité et fiabilité.</li>
      <li class="mb-2"><strong>Pour les consultants</strong> : Choisissez des designs modernes qui mettent en avant votre expertise et vos réussites clients.</li>
      <li class="mb-2"><strong>Pour les créatifs</strong> : Sélectionnez des templates qui permettent de mettre en valeur visuellement votre travail via un portfolio attrayant.</li>
    </ul>
    
    <h2 class="text-2xl font-semibold my-6">L'importance de l'accompagnement</h2>
    <p class="mb-4">Au-delà du template lui-même, assurez-vous de choisir un prestataire qui offre un support technique efficace et des mises à jour régulières.</p>
    <p class="mb-4">Profelio ne se contente pas de fournir des templates : nous accompagnons nos clients dans la personnalisation et l'optimisation de leur site pour en faire un véritable outil de développement professionnel.</p>
    
    <h2 class="text-2xl font-semibold my-6">Conclusion</h2>
    <p class="mb-4">Le choix d'un template n'est pas uniquement une question d'esthétique, mais bien une décision stratégique qui impactera directement l'image que vous renvoyez et l'efficacité de votre présence en ligne.</p>
    <p class="mb-4">N'hésitez pas à explorer notre galerie de templates spécialisés par profession pour trouver celui qui correspondra parfaitement à vos besoins spécifiques.</p>
    `,
  },
  {
    id: 3,
    title: "L'importance du SEO pour les professionnels indépendants",
    excerpt:
      "Être visible en ligne est crucial pour développer votre clientèle. Voici nos conseils SEO.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1470",
    date: "28 Avril 2025",
    author: "Marie Leclerc",
    category: "SEO",
    slug: "importance-seo-professionnels-independants",
    readTime: "6 min",
    content: `
    <p class="mb-4">Pour les professionnels indépendants, être visible sur les moteurs de recherche n'est plus une option, c'est une nécessité. Le SEO (Search Engine Optimization) vous permet d'être trouvé par des clients potentiels au moment précis où ils recherchent vos services.</p>
    
    <h2 class="text-2xl font-semibold my-6">Pourquoi le SEO est crucial pour les indépendants</h2>
    <p class="mb-4">Contrairement aux grandes entreprises qui peuvent investir massivement en publicité, les professionnels indépendants doivent souvent optimiser leurs ressources marketing. Le SEO offre un excellent retour sur investissement à long terme.</p>
    <p class="mb-4">De plus, les recherches locales ("avocat à Lyon", "médecin généraliste Paris 15") sont particulièrement importantes pour les professionnels exerçant dans un secteur géographique défini.</p>
    
    <h2 class="text-2xl font-semibold my-6">Les fondamentaux du SEO pour votre site professionnel</h2>
    <p class="mb-4">Voici les bases à maîtriser pour améliorer votre référencement :</p>
    
    <h3 class="text-xl font-medium my-4">1. Recherche de mots-clés</h3>
    <p class="mb-4">Identifiez les termes que vos clients potentiels utilisent pour trouver vos services. Utilisez des outils comme Google Keyword Planner ou Ubersuggest pour découvrir des mots-clés pertinents.</p>
    <p class="mb-4">Focalisez-vous sur des expressions longues et spécifiques ("avocat spécialisé divorce Paris") plutôt que des termes génériques très concurrentiels ("avocat").</p>
    
    <h3 class="text-xl font-medium my-4">2. Optimisation on-page</h3>
    <p class="mb-4">Intégrez naturellement vos mots-clés dans :</p>
    <ul class="list-disc ml-6 mb-4">
      <li class="mb-2">Les titres de vos pages (balises H1, H2, H3)</li>
      <li class="mb-2">L'URL de vos pages</li>
      <li class="mb-2">Les premiers paragraphes de votre contenu</li>
      <li class="mb-2">Les balises meta (title et description)</li>
      <li class="mb-2">Les textes alternatifs des images</li>
    </ul>
    
    <h3 class="text-xl font-medium my-4">3. Contenu de qualité</h3>
    <p class="mb-4">Créez régulièrement du contenu utile et informatif qui répond aux questions que se posent vos clients potentiels. Un blog professionnel est un excellent moyen de démontrer votre expertise tout en améliorant votre SEO.</p>
    <p class="mb-4">Privilégiez la qualité à la quantité : un article approfondi et bien documenté aura plus d'impact qu'une dizaine de contenus superficiels.</p>
    
    <h3 class="text-xl font-medium my-4">4. SEO local</h3>
    <p class="mb-4">Pour les professionnels ayant une clientèle locale :</p>
    <ul class="list-disc ml-6 mb-4">
      <li class="mb-2">Créez et optimisez votre fiche Google Business Profile</li>
      <li class="mb-2">Inscrivez-vous dans les annuaires professionnels de votre secteur</li>
      <li class="mb-2">Incluez votre adresse et zone d'intervention sur votre site</li>
      <li class="mb-2">Sollicitez des avis clients positifs</li>
    </ul>
    
    <h2 class="text-2xl font-semibold my-6">Mesurer l'efficacité de vos efforts SEO</h2>
    <p class="mb-4">Utilisez Google Analytics et Google Search Console pour suivre :</p>
    <ul class="list-disc ml-6 mb-4">
      <li class="mb-2">Le trafic organique sur votre site</li>
      <li class="mb-2">Les mots-clés qui génèrent des visites</li>
      <li class="mb-2">Le taux de conversion des visiteurs en clients</li>
      <li class="mb-2">Les pages les plus performantes</li>
    </ul>
    
    <h2 class="text-2xl font-semibold my-6">Conclusion</h2>
    <p class="mb-4">Le SEO est un investissement à long terme qui peut considérablement accroître votre visibilité et attirer des clients qualifiés. Ne négligez pas cette dimension essentielle de votre présence en ligne.</p>
    <p class="mb-4">Chez Profelio, tous nos templates sont optimisés pour le référencement naturel, vous donnant ainsi une base solide pour développer votre stratégie SEO.</p>
    `,
  },
];

const BlogPost: React.FC = () => {
  const searchParams = useSearchParams();
  const [slug, setSlug] = useState<string | null>(null);

  useEffect(() => {
    // Get slug from search params
    const slugFromParams = searchParams.get("slug");
    console.log(slugFromParams);
    
    setSlug(slugFromParams);
  }, [searchParams]);

  const post = blogPosts.find((post) => post.slug === slug);

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center py-20">
              <h1 className="text-3xl font-medium mb-4">Article non trouvé</h1>
              <p className="text-gray-600 mb-8">
                Désolé, l'article que vous recherchez n'existe pas ou a été
                déplacé.
              </p>
              <Link href="/blog">
                <Button>Retourner à la liste des articles</Button>
              </Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary-dark mb-6"
            >
              <ArrowLeft size={16} className="mr-2" /> Retour aux articles
            </Link>

            {/* Post header */}
            <h1 className="text-3xl font-medium mb-4">{post.title}</h1>

            <div className="flex flex-wrap gap-4 items-center text-gray-600 mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-2" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-2" />
                <Badge variant="outline">{post.category}</Badge>
              </div>
              <div className="flex items-center">
                <Clock size={16} className="mr-2" />
                <span>{post.readTime} de lecture</span>
              </div>
            </div>

            {/* Featured image */}
            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>

            {/* Post content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author info */}
            <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
              <h3 className="font-medium mb-2">À propos de l'auteur</h3>
              <p className="text-gray-600">
                {post.author} est spécialiste en {post.category} chez Profelio.
                Passionné(e) par le développement de solutions digitales pour
                les professionnels,
                {post.author} partage régulièrement son expertise sur notre
                blog.
              </p>
            </div>

            {/* Related posts or CTA would go here */}
            <div className="mt-12 text-center">
              <h3 className="text-xl font-medium mb-4">
                Vous avez apprécié cet article ?
              </h3>
              <p className="text-gray-600 mb-6">
                Découvrez comment nos templates professionnels peuvent améliorer
                votre présence en ligne.
              </p>
              <Link href="/templates">
                <Button>Explorer nos templates</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
