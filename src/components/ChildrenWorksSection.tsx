
import { useState } from "",
      description: "Интерактивные задания для детей",
      icon: "PuzzlePiece",
      color: "from-blue-500 to-blue-600", 
      href: "#tasks"
    },react";
import { Card, CardContent } from "@/components/ui/car
    {
      title: "Галерея",
      description:d";
import { Badge } from "@/components/ui/ "Фотографии военbadge";
import { Button } from "@/ных лет",
      icon: "components/ui/button";
import {
  DialogImages",
      color: "from-green-500 to-green-600",
      href: "#gallery,
  DialogContent,
  DialogHeader,
  DialogTitle,"
    },
    {
      title: "Анкета род
} from "@/components/ui/dialog";
import Icon from "@/components/uiителей",
      description: "/icon";

interface ChildWork {
  id: number;
  title: string;
  author: string;
  age: number;
  category: string;
  image: string;
  description: string;
  date: string;
}

const ChildrenWorksSection = () => {
  const [selectedWork, setSelectedWork] = useState<ChildWork | null>(null);
  const [activeFilter, setActiveFilter] = useState("Все");

  const works: ChildWork[] = [
    {
      id: 1,
      title: "Портрет героя",
      author: "Анна Петрова",
      age: 6,
      category: "Рисунки",
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0Поделитесь семейными историями",
      icon: "FileText",
      color: "from-yellow-500 to-yellow-600",
      href: "#survey"
    },
    {
      title: "Детские работы", 
      description: "Творчество наших воспитанников",
      icon: "Palette",
      color: "from-purple-500 to-purple-600",
      href: "#works"
    },
    {
      title: "Результаты проекта",
      description: "Итоги и достижения",
      icon: "Trophy",
      color: "from-indigo-500 to-indigo-600",
      href: "#results"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-?w=400&h=300&fit=crop",
      description: "Рbold text-gray-900 mbисунок нижегородского героя войны кар-4">
            Разделы проекта
          андашами",
      date: "15 марта 2024"
    },</h2>
          <p className="text-lg text-gray-
    {
      id: 600">
            Выберите интересующий раздел для подробного изучения
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:2,
      title: "Орден Победы",
      author: "Максим Иванов",
      age: 5,
      category: "Поделки",grid-cols-3 gap-6">
          {sections.map((section, index) => (
            <Card key={index} className="group cursor-pointer hover:shadow-xl transition
      image: "https://images.unsplash.com/photo-1578-all duration-300 transform hover:-translate-y-1 border-0 bg-white">
              <CardContent className="p-6">
                <div className={`w-14 h-14 mb-4 rounded-xl662996442-48f60103fc96?w=400&h=300&fit=crop",
      description: "Поделка из пластилина и картона",
      date: "20 марта 2024"
    },
    {
      i bg-gradient-to-br ${d: 3,
      title: "Памятник героsection.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300ям",
      author: "София`}>
                  <Icon name={section.icon as any} className="w-7 h-7 text-white Смирнова",
      age: 6,
      category: "Рисунки",
      image: "https://images" />
                </div>
                
                <h3 className="font.unsplash.com/photo-1578662996442-48-bold text-xl mb-2 f60103fc96?w=400&h=300&fit=text-gray-900 group-hover:text-red-600 transition-colors">
                  {section.titlecrop",
      description: "Акварельный р}
                </h3>
                
                <p className="textисунок памятника в-gray-600 mb-4 leading центре города",
      date: "22 марта 2024"-relaxed">
                  {section.description}
                </p>
                
                <Button 
                  variant="ghost
    },
    {
      id: 4,
      title: "Книжка о гер" 
                  className="w-fullое",
      author: " justify-between group-hover:bg-reДмитрий Козлов",
      age: 5d-50 group-hover:text-red-600 transition-colors"
                >,
      category: "Проекты",
      image: "https://images.unsplash.
                  Перейти
                com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop  <Icon name="ArrowRight" className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickNavigation;
