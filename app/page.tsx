"use client";

import Link from 'next/link';
import { ArrowRight, Sparkles, Users, TrendingUp, MessageCircle, Award, BookOpen, Star, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ModernBackground from '@/components/ModernBackground';
import FloatingParticles from '@/components/FloatingParticles';

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0A0F1E]">
      {/* Modern Animated Background */}
      <ModernBackground />
      <FloatingParticles />

      {/* Navigation Header */}
      <nav className="sticky top-0 z-50 backdrop-blur-xl bg-[#0A0F1E]/80 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#7C3AED] rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img 
                  src="/logo.png" 
                  alt="Forstek Logo" 
                  className="relative h-12 w-12 rounded-xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent tracking-tight">Forstek</span>
            </Link>
            {/* Seuls les boutons Connexion et Commencer */}
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button 
                  variant="ghost" 
                  className="text-white hover:bg-white/10 hover:text-white border-none"
                >
                  Connexion
                </Button>
              </Link>
              <Link href="/register">
                <Button 
                  className="bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white border-none shadow-lg shadow-[#2563EB]/50 hover:shadow-xl hover:shadow-[#2563EB]/60 transition-all"
                >
                  Commencer
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 pt-20 pb-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/20">
              <Sparkles className="w-4 h-4 text-[#60A5FA]" />
              <span className="text-sm text-gray-300">Plateforme #1 pour les étudiants tunisiens</span>
            </div>

            <h1 className="text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">Trouvez votre</span>
              <br />
              <span className="text-white">stage</span>
            </h1>

            <p className="text-xl text-gray-400 leading-relaxed">
              Connectez-vous avec des opportunités de stages. 
              Développez vos compétences, trouvez des mentors et lancez votre carrière.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/register">
                <Button 
                  className="h-14 px-8 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white border-none shadow-2xl shadow-[#2563EB]/50 hover:shadow-[#2563EB]/60 transition-all text-lg group"
                >
                  Commencer gratuitement
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/offres">
                <Button 
                  variant="outline"
                  className="h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm text-lg"
                >
                  Voir les offres
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-8">
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-gray-400">Stages disponibles</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">2,000+</div>
                <div className="text-sm text-gray-400">Étudiants actifs</div>
              </div>
              <div className="h-12 w-px bg-white/20"></div>
              <div>
                <div className="text-3xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">95%</div>
                <div className="text-sm text-gray-400">Taux de satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/40 to-[#7C3AED]/40 rounded-3xl blur-3xl group-hover:blur-[100px] transition-all duration-500"></div>
            <div className="relative backdrop-blur-xl bg-white/5 rounded-3xl p-6 border-2 border-white/20 shadow-2xl hover:border-white/30 transition-all duration-300 hover:shadow-[0_0_50px_rgba(37,99,235,0.3)]">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/forstek-slogan.jpg"
                  alt="Slogan Forstek"
                  className="w-full h-[400px] object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1E]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#2563EB]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl bg-white/5 border border-white/20 mb-6">
              <Star className="w-4 h-4 text-[#60A5FA]" />
              <span className="text-sm text-gray-300">Fonctionnalités</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">Tout ce dont vous avez besoin</span>
              <br />
              <span className="text-white">pour réussir votre carrière</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Une plateforme complète qui vous accompagne de la recherche de stage 
              jusqu'à votre premier emploi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="w-8 h-8 text-[#60A5FA]" />,
                title: "Opportunités Globales",
                description: "Accédez à des milliers d'offres de stages en Tunisie et à l'international"
              },
              {
                icon: <Users className="w-8 h-8 text-[#60A5FA]" />,
                title: "Réseau Professionnel",
                description: "Connectez-vous avec des experts et élargissez votre réseau"
              },
              {
                icon: <MessageCircle className="w-8 h-8 text-[#60A5FA]" />,
                title: "Forum & Communauté",
                description: "Échangez avec d'autres étudiants et partagez vos expériences"
              },
              {
                icon: <BookOpen className="w-8 h-8 text-[#60A5FA]" />,
                title: "Roadmaps Carrière",
                description: "Suivez des parcours personnalisés pour atteindre vos objectifs"
              },
              {
                icon: <Award className="w-8 h-8 text-[#60A5FA]" />,
                title: "Mentorship Expert",
                description: "Bénéficiez de l'accompagnement de professionnels expérimentés"
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-[#60A5FA]" />,
                title: "Suivi de Progression",
                description: "Suivez vos candidatures et progressez vers vos objectifs"
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 h-full hover:scale-105 transition-all duration-300 hover:border-white/20">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-2xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 group-hover:from-[#2563EB]/30 group-hover:to-[#7C3AED]/30 transition-all duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white text-center group-hover:text-[#60A5FA] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-center leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-[#7C3AED]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="text-white">Comment ça</span>
            <br />
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">fonctionne ?</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Trouvez votre stage en 4 étapes simples
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Créez votre profil",
              description: "Inscrivez-vous gratuitement et complétez votre profil en quelques minutes"
            },
            {
              step: "02",
              title: "Explorez les offres",
              description: "Parcourez des centaines de stages filtrés selon vos préférences"
            },
            {
              step: "03",
              title: "Postulez facilement",
              description: "Candidatez en un clic et suivez l'état de vos candidatures"
            },
            {
              step: "04",
              title: "Décrochez votre stage",
              description: "Préparez-vous avec nos ressources et décrochez le stage parfait"
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              <div className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all h-full hover:bg-white/[0.07]">
                <div className="text-6xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent mb-6 opacity-50">{step.step}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-[#2563EB] to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">Ce que disent</span>
            <br />
            <span className="text-white">nos étudiants</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Amira Ben Salem",
              role: "Étudiante en Informatique",
              content: "Grâce à Forstek, j'ai décroché un stage chez Google. La plateforme est intuitive et les ressources sont excellentes !",
              rating: 5
            },
            {
              name: "Mohamed Trabelsi",
              role: "Étudiant en Marketing",
              content: "Le système de mentorat m'a énormément aidé à préparer mes entretiens. Je recommande vivement Forstek !",
              rating: 5
            },
            {
              name: "Salma Khediri",
              role: "Étudiante en Design",
              content: "Interface moderne, processus simple et des opportunités incroyables. Forstek a changé ma recherche de stage.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div 
              key={index}
              className="backdrop-blur-xl bg-white/5 rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all hover:shadow-2xl hover:shadow-[#2563EB]/20 hover:bg-white/[0.07]"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#F59E0B] text-[#F59E0B]" />
                ))}
              </div>
              
              <p className="text-gray-300 leading-relaxed mb-6">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center">
                  <span className="text-white font-bold">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="backdrop-blur-xl bg-gradient-to-r from-[#2563EB]/20 to-[#7C3AED]/20 border border-white/10 rounded-3xl p-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="text-white">Prêt à démarrer</span>
              <br />
              <span className="bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">votre carrière professionnelle ?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Rejoignez des milliers d'étudiants tunisiens qui ont déjà trouvé 
              leur stage grâce à Forstek.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register">
                <Button 
                  className="h-14 px-8 bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] hover:from-[#1D4ED8] hover:to-[#2563EB] text-white border-none shadow-2xl shadow-[#2563EB]/50 hover:shadow-[#2563EB]/60 transition-all text-lg group"
                >
                  Créer mon compte
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/offres">
                <Button 
                  variant="outline"
                  className="h-14 px-8 bg-white/5 border-white/20 text-white hover:bg-white/10 hover:border-white/30 backdrop-blur-sm text-lg"
                >
                  Voir les offres
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 relative border-t border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1E] to-[#000000]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="/logo.png" 
                  alt="Forstek Logo" 
                  className="h-10 w-10 rounded-xl"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-[#60A5FA] to-[#A78BFA] bg-clip-text text-transparent">Forstek</span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                La plateforme qui connecte les étudiants tunisiens avec les meilleures 
                opportunités de stages et de carrière.
              </p>
              <div className="flex gap-4">
                {/* ...vos liens réseaux sociaux ici... */}
              </div>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Plateforme</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#features" className="hover:text-white transition-colors">Fonctionnalités</a></li>
                <li><Link href="/offres" className="hover:text-white transition-colors">Offres de stage</Link></li>
                <li><Link href="/mentorship" className="hover:text-white transition-colors">Mentorship</Link></li>
                <li><Link href="/forum" className="hover:text-white transition-colors">Forum</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white font-semibold mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Centre d'aide</a></li>
                <li><Link href="/about" className="hover:text-white transition-colors">À propos</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; 2024 Forstek. Tous droits réservés.
              </p>
              <div className="flex flex-wrap gap-6 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
                <a href="#" className="hover:text-white transition-colors">Conditions d'Utilisation</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
