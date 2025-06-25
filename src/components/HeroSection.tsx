import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-red-50 to-blue-50 py-20 hero-pattern"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-blue-600 rounded-full mb-6">
              <Icon name="Award" className="w-10 h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">Нижегородцы</span> в годы{" "}
            <span className="text-blue-600">Великой Отечественной войны</span>
          </h1>

          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Познакомимся с героями нашего города, узнаем их истории и почтим
            память тех, кто защищал нашу Родину. Проект для старшей группы
            детского сада.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3"
              onClick={() =>
                document
                  .getElementById("heroes")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="Users" className="w-5 h-5 mr-2" />
              Узнать о героях
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3"
              onClick={() =>
                document
                  .getElementById("tasks")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Icon name="BookOpen" className="w-5 h-5 mr-2" />
              Выполнить задания
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Память</h3>
              <p className="text-gray-600 text-sm">
                Сохраняем историю наших героев
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Lightbulb" className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Знания</h3>
              <p className="text-gray-600 text-sm">
                Изучаем историю родного края
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Патриотизм</h3>
              <p className="text-gray-600 text-sm">
                Воспитываем любовь к Родине
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
