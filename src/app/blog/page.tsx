"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Sample blog data - in a real app, this would come from an API
const blogPosts = [
  {
    id: 1,
    title: "Les meilleures pratiques pour créer un site web professionnel",
    excerpt:
      "Découvrez comment créer un site web qui inspire confiance et attire des clients potentiels.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=500",
    date: "10 Mai 2025",
    author: "Sophie Martin",
    category: "Design Web",
    slug: "meilleures-pratiques-site-web-professionnel",
  },
  {
    id: 2,
    title: "Comment choisir le bon template pour votre profession",
    excerpt:
      "Le choix du bon template est essentiel pour représenter correctement votre activité professionnelle.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
    date: "2 Mai 2025",
    author: "Thomas Durand",
    category: "Templates",
    slug: "choisir-template-profession",
  },
  {
    id: 3,
    title: "L'importance du SEO pour les professionnels indépendants",
    excerpt:
      "Être visible en ligne est crucial pour développer votre clientèle. Voici nos conseils SEO.",
    image:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=500",
    date: "28 Avril 2025",
    author: "Marie Leclerc",
    category: "SEO",
    slug: "importance-seo-professionnels-independants",
  },
  {
    id: 4,
    title:
      "Stratégies de marketing digital pour médecins et professionnels de santé",
    excerpt:
      "Comment les professionnels de santé peuvent utiliser le marketing digital pour développer leur patientèle.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=500",
    date: "20 Avril 2025",
    author: "Jean Dupont",
    category: "Marketing",
    slug: "marketing-digital-medecins",
  },
  {
    id: 5,
    title: "Optimiser votre présence en ligne : guide pour les avocats",
    excerpt:
      "Un guide complet pour les avocats souhaitant améliorer leur visibilité sur internet.",
    image:
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=500",
    date: "12 Avril 2025",
    author: "Claire Duval",
    category: "Présence en ligne",
    slug: "optimiser-presence-en-ligne-avocats",
  },
  {
    id: 6,
    title: "Les tendances web design de 2025 pour les sites professionnels",
    excerpt:
      "Découvrez les dernières tendances en matière de design pour créer un site web moderne et attractif.",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=500",
    date: "5 Avril 2025",
    author: "Luc Bernard",
    category: "Design Web",
    slug: "tendances-web-design-2025",
  },
];

// Category filters
const categories = [
  "Tous",
  "Design Web",
  "Templates",
  "SEO",
  "Marketing",
  "Présence en ligne",
];

const BlogList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Tous");

  // Filter posts by search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "Tous" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl font-light mb-2">Blog Profelio</h1>
            <p className="text-lg text-gray-600 mb-8">
              Conseils et actualités pour développer votre présence en ligne
              professionnelle
            </p>

            {/* Search and filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher un article..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Blog post grid */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <Card key={post.id} className="overflow-hidden">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <CardHeader className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <Badge>{post.category}</Badge>
                        <span className="text-sm text-gray-500">
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-lg font-medium line-clamp-2">
                        {post.title}
                      </h3>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                      <p className="text-gray-600 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0 flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Par {post.author}
                      </span>
                      <Link href={`/blog/${post.slug}`}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-primary hover:text-primary-dark"
                        >
                          Lire plus <ArrowRight size={16} className="ml-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">
                  Aucun article ne correspond à votre recherche
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("Tous");
                  }}
                >
                  Réinitialiser la recherche
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogList;
