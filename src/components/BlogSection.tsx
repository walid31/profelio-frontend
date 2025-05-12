
import React from "react";
import Link from 'next/link';

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

// Sample blog data - in a real app, this would come from an API or database
const featuredPosts = [
  {
    id: 1,
    title: "Les meilleures pratiques pour créer un site web professionnel",
    excerpt: "Découvrez comment créer un site web qui inspire confiance et attire des clients potentiels.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500",
    date: "10 Mai 2025",
    author: "Sophie Martin",
    slug: "meilleures-pratiques-site-web-professionnel"
  },
  {
    id: 2,
    title: "Comment choisir le bon template pour votre profession",
    excerpt: "Le choix du bon template est essentiel pour représenter correctement votre activité professionnelle.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
    date: "2 Mai 2025",
    author: "Thomas Durand",
    slug: "choisir-template-profession"
  },
  {
    id: 3,
    title: "L'importance du SEO pour les professionnels indépendants",
    excerpt: "Être visible en ligne est crucial pour développer votre clientèle. Voici nos conseils SEO.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=500",
    date: "28 Avril 2025",
    author: "Marie Leclerc",
    slug: "importance-seo-professionnels-independants"
  }
];

const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light mb-4">Notre Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Conseils, astuces et actualités pour développer votre présence en ligne et attirer de nouveaux clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredPosts.map(post => (
            <Card key={post.id} className="overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader>
                <div className="text-sm text-gray-500 mb-2">{post.date} • {post.author}</div>
                <CardTitle className="text-xl">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Link href={`/blog/${post.slug}`}>
                  <Button variant="outline" className="text-primary hover:text-primary-dark">
                    Lire plus <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button>
              Tous les articles <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
