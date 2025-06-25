
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [isMenuOpen, setIsPalette" className="w-6 h-6 text-red-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{works.filter(w => wMenuOpen] = useState(false);

  const navigation = [
    { name: "Главная", href: "#home" },
    { name: "Герои войны", href: "#heroes" },
    { name: "Задания", href: "#tasks" },
    { name.category === "Рисунки").length}</div>
            <div className="text-sm text-gray-600">Рисунков</div>
          </div>
          <div className="text-center bg-white rounded-lg: "Галерея", href: "#gallery" },
    { name: "Анкета", href: "#survey" },
    { name: "Детские работы", href: "#works" },
    { name: "Результаты", href: "#results" },
  ];

  return (
    <header className="bg-white shadow-lg border-b-4 border-red-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Icon name="Star" className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">
                Нижегородцы в годы ВОВ
              </h1>
              <p className="text-xs text-gray-600">Старшая группа ДОО</p>
            </div>
          </div>

          <nav className="hidden lg:flex space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text p-6 shadow-sm border border-blue-100">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Scissors" className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{works.filter(w => w.category === "Поделки").length}</div>
            <div className="text-sm text-gray-600">Поделок</div>
          </div>
          <div className="text-center bg-white rounded-lg p-6 shadow-sm border border-amber-100">
            <div className="w-12 h-12 bg-amber-100 rounde-red-600 hover:bg-red-50 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="BookOpen" className="w-6 h-6 text-amber-600" />
            </div>
            <div className="text-2xl font-bold text-gray-900">{works.filter(w => w.category === "Проекты").length}</div>
            <div className="text-sm text-gray-600">Проектов</div>
          </div>
        </div>

        {/* Галерея работ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWorks.map((work) => (
            <Card 
              key={work.id} 
              className="overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer group border-0 shadow-sm hover:scale-105"
              onClick={() => setSelectedWork(work)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={d-lg transition-all duration-200 hover:scale-105work.image}"
              >
                {item
                  alt={work.title}
                  className="w-full h-48 object-cover group-hover:.name}
              </a>
            ))}
          </navscale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-white/90 text-red-600 border-red-200>

          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden hover:bg-red-50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Icon name={isMenuOpen ? "X" : "Menu"} className="w-6 h-6 text-gray-700" />">
                    {work.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Icon name="Eye" className="w-8 h-8
          </Button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 animate-fade-in">
            <nav className="flex flex-col space-y-2"> text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {navigation.map((item) => (
                <a
                  key={item.name}
                </div>
              </div>

              <CardContent
                  href={item.href}
                  className="px-4 py-3 text-sm font-medium text-gray-700 className="p-4">
                <h3 className="font-semibold text-gray hover:text-red-600 hover:bg-red-50-900 mb-2  rounded-lg transition-colorsgroup-hover:text"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              -red-600 transition-colors">
                  {work.title}
                </h3>
                <div))}
            </nav>
          </div>
        )}
      </div>
    </header className="flex items-center gap-2 text-sm text-blue-600 mb-2">
                  <Icon name="User" className="w-4 h-4" />
                  <span>{work.author}, {work.age} лет>
  );
};

export default Header;
