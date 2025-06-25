import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const HeroesSection = () => {
  const heroes = [
    {
      name: "Валерий Чкалов",
      role: "Лётчик-испытатель",
      description:
        "Легендарный советский лётчик, совершивший первый беспосадочный перелёт через Северный полюс.",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop",
      achievements: [
        "Герой Советского Союза",
        "Командир экипажа",
        "Рекордсмен",
      ],
    },
    {
      name: "Зоя Космодемьянская",
      role: "Партизанка",
      description:
        "Первая женщина, удостоенная звания Героя Советского Союза во время ВОВ.",
      image:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=300&h=400&fit=crop",
      achievements: ["Герой Советского Союза", "Партизанка", "Разведчица"],
    },
    {
      name: "Иван Кулебакин",
      role: "Танкист",
      description: "Командир танкового взвода, участник обороны Сталинграда.",
      image:
        "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=300&h=400&fit=crop",
      achievements: ["Орден Красной Звезды", "Танкист", "Защитник Сталинграда"],
    },
  ];

  return (
    <section id="heroes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Герои нашего города
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Познакомьтесь с настоящими героями Нижнего Новгорода, которые
            защищали нашу Родину
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {heroes.map((hero, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-red-600 text-white">
                    <Icon name="Award" className="w-3 h-3 mr-1" />
                    Герой
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-gray-900">
                  {hero.name}
                </CardTitle>
                <p className="text-blue-600 font-medium">{hero.role}</p>
              </CardHeader>

              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">{hero.description}</p>

                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-900">
                    Достижения:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {hero.achievements.map((achievement, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500 italic">
            Это лишь несколько историй из тысяч подвигов нижегородцев в годы
            войны
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroesSection;
