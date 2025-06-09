import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ProjectVisualElements from "@/components/project-visual-elements"
import {
  ArrowLeft,
  Globe,
  Shield,
  Database,
  Server,
  ExternalLink,
  CheckCircle,
  Zap,
  Users,
  Lock,
  Code,
  Monitor,
  Github,
  Play,
} from "lucide-react"

const projectsData = {
  pingflow: {
    title: "PingFlow",
    subtitle: "Платформа мониторинга сервисов и веб-сайтов",
    description:
      "Современная система мониторинга доступности сервисов и веб-сайтов с богатыми возможностями кастомизации и интеграции. Идеально подходит как для публичного, так и для внутреннего использования.",
    image: "https://clck.ru/3MXTuz",
    demoUrl: null,
    githubUrl: null,
    isPrivate: true,
    features: [
      {
        icon: <Monitor className="h-5 w-5" />,
        title: "Мультипротокольные проверки",
        description: "Поддержка HTTP/HTTPS, ICMP (PING), TCP-портов",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Система инцидентов",
        description: "Хранение истории инцидентов, автоматическое определение",
      },
      {
        icon: <Globe className="h-5 w-5" />,
        title: "Публичные статус-страницы",
        description: "Кастомизируемые страницы доступности сервисов",
      },
      {
        icon: <Users className="h-5 w-5" />,
        title: "Управление пользователями",
        description: "Регистрация, авторизация и профили пользователей",
      },
      {
        icon: <Code className="h-5 w-5" />,
        title: "REST API",
        description: "Полноценный API для работы с системой",
      },
      {
        icon: <Server className="h-5 w-5" />,
        title: "Агент мониторинга",
        description: "Локальный агент для внутренней сети или защищённых сервисов",
      },
    ],
    techStack: ["FastAPI", "PostgreSQL", "Redis", "JWT", "Docker", "Uvicorn", "pytest"],
    architecture: [
      "Асинхронный backend на FastAPI для высокой производительности",
      "Использование Redis для кэширования и управления сессиями",
      "Надёжное хранение данных в PostgreSQL",
      "JWT-токены с автоматическим обновлением",
      "Лёгкий агент мониторинга для локальных сетей",
    ],
    color: "from-slate-800 to-slate-900",
    accent: "from-blue-500 to-cyan-500",
  },
  searchtorrent: {
    title: "SearchTorrent",
    subtitle: "Безопасный поиск торрентов с проверкой через VirusTotal",
    description:
      "Асинхронный Python-сервис для поиска торрент-файлов на RuTracker.org, включающий автоматическую авторизацию, парсинг данных, фильтрацию и проверку торрентов на вредоносность с использованием API сервиса VirusTotal.",
    demoUrl: null,
    githubUrl: "https://gitlab.elevo.space/flex/search_torrent",
    isPrivate: false,
    features: [
      {
        icon: <Lock className="h-5 w-5" />,
        title: "Авторизация на RuTracker",
        description: "Авторизация через HTTPS и proxy",
      },
      {
        icon: <Database className="h-5 w-5" />,
        title: "Поиск торрентов",
        description: "Поиск по ключевому слову с извлечением метаданных",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Проверка безопасности",
        description: "Проверка торрент-ссылок через VirusTotal API",
      },
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Фильтрация результатов",
        description: "Возврат только безопасных результатов",
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: "Асинхронность",
        description: "Реализация с использованием aiohttp и async/await",
      },
    ],
    techStack: ["Python 3.11+", "FastAPI", "aiohttp", "BeautifulSoup", "VirusTotal API", "fake-useragent"],
    security: [
      "Каждая найденная торрент-ссылка проверяется в VirusTotal",
      "Результаты с malicious == 0 и suspicious == 0 считаются безопасными",
      "Вредоносные результаты автоматически отфильтровываются",
      "Поддержка HTTPS proxy для обхода блокировок",
    ],
    color: "from-slate-800 to-slate-900",
    accent: "from-green-500 to-teal-500",
  },
  getmetadata: {
    title: "GetMetadata",
    subtitle: "Асинхронный сервис получения метаданных фильмов с КиноПоиска",
    description:
      "Python-сервис, использующий (не)официальное API КиноПоиска для поиска и получения подробной информации о фильмах и сериалах по ключевому слову или ID. Реализован с использованием асинхронного подхода для высокой производительности и масштабируемости.",
    image: "/FLX.jpg",
    demoUrl: null,
    githubUrl: "https://gitlab.elevo.space/flex/get_metadata",
    isPrivate: false,
    features: [
      {
        icon: <Database className="h-5 w-5" />,
        title: "Поиск фильмов",
        description: "Поиск по названию с фильтрацией результатов",
      },
      {
        icon: <ExternalLink className="h-5 w-5" />,
        title: "Получение по ID",
        description: "Получение информации по ID фильма из URL",
      },
      {
        icon: <CheckCircle className="h-5 w-5" />,
        title: "Фильтрация контента",
        description: "Разделение на фильмы, сериалы и другие типы",
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: "Асинхронные запросы",
        description: "Высокая производительность через aiohttp",
      },
      {
        icon: <Code className="h-5 w-5" />,
        title: "Pydantic схемы",
        description: "Валидация и сериализация данных",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "API ключи",
        description: "Безопасная работа с внешними API",
      },
    ],
    techStack: ["Python 3.12+", "FastAPI", "aiohttp", "Pydantic", "Kinopoisk API"],
    apiFeatures: [
      "Использование X-API-KEY в заголовках для аутентификации",
      "Поддержка фильмов (type=FILM) и сериалов (type=TV_SERIES)",
      "Гибкая конфигурация через settings модуль",
      "Валидация данных через Pydantic схемы",
      "Асинхронная обработка всех HTTP запросов",
    ],
    useCases: [
      "Интеграция с Telegram ботами для поиска фильмов",
      "Создание каталогов фильмов и сериалов",
      "Автоматическое обогащение метаданными",
      "Микросервисная архитектура для медиа-платформ",
    ],
    color: "from-slate-800 to-slate-900",
    accent: "from-orange-500 to-red-500",
  },
  booklib: {
    title: "BookLib",
    subtitle: "Электронная библиотека с ролевым доступом",
    description:
      "Веб-приложение на базе FastAPI для управления электронной библиотекой. Поддерживает загрузку книг, работу с полками пользователя, историю чтения и административное управление.",
    demoUrl: "https://booklib-demo.example.com",
    githubUrl: "https://gitlab.elevo.space/k.dubov/booklib",
    isPrivate: false,
    features: [
      {
        icon: <Users className="h-5 w-5" />,
        title: "Пользовательские функции",
        description: "Полки, история чтения, заявки на добавление книг",
      },
      {
        icon: <Lock className="h-5 w-5" />,
        title: "Административная панель",
        description: "Добавление, редактирование и удаление книг",
      },
      {
        icon: <Database className="h-5 w-5" />,
        title: "Хранение файлов",
        description: "Загрузка книг на S3 с управлением доступом",
      },
      {
        icon: <Shield className="h-5 w-5" />,
        title: "Ролевой доступ",
        description: "Система ролей через декоратор @role_required",
      },
    ],
    techStack: ["FastAPI", "PostgreSQL", "aiobotocore", "S3", "SQLAlchemy", "Pydantic"],
    userFeatures: [
      "Получение списка всех книг с фильтрацией",
      "Работа с персональными полками",
      "Добавление книг в историю чтения",
      "Подача заявок на добавление новых книг",
    ],
    adminFeatures: [
      "Добавление книг с загрузкой файлов на S3",
      "Обновление информации о книгах и авторах",
      "Удаление книг и файлов из хранилища",
      "Управление заявками пользователей",
    ],
    color: "from-slate-800 to-slate-900",
    accent: "from-purple-500 to-pink-500",
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projectsData[params.slug as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <div className="bg-slate-950/80 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Button asChild variant="ghost" className="text-slate-300 hover:text-white">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Назад к портфолио
              </Link>
            </Button>

            <div className="flex gap-3">
              {!project.isPrivate && project.demoUrl && (
                <Button asChild size="sm" className="bg-white/10 hover:bg-white/20">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
                  </a>
                </Button>
              )}
              {!project.isPrivate && project.githubUrl && (
                <Button asChild size="sm" variant="outline" className="border-slate-600 hover:bg-slate-800">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    GitLab
                  </a>
                </Button>
              )}
              {project.isPrivate && (
                <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-600 rounded-lg">
                  <Lock className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm text-yellow-400">Коммерческий проект</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative">
        {/* Floating Widgets */}
        <div className="absolute top-10 left-10 z-10 hidden lg:block">
          <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-4 transform rotate-2 shadow-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
              <span className="text-emerald-400 text-xs">Production Ready</span>
            </div>
            <div className="text-slate-300 text-sm">Stable v2.1.0</div>
          </div>
        </div>

        <div className="absolute top-20 right-16 z-10 hidden lg:block">
          <div className="bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3 transform -rotate-1 shadow-2xl">
            <div className="flex items-center gap-2">
              <Database className="h-4 w-4 text-blue-400" />
              <span className="text-slate-300 text-xs">High Performance</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center space-y-6 mb-16">
            <div className="relative inline-block">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${project.accent} rounded-full blur-xl opacity-30`}
              ></div>
              <div
                className={`relative inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${project.accent} mb-6 shadow-lg shadow-blue-500/25`}
              >
                {params.slug === "pingflow" && <Globe className="h-10 w-10 text-white" />}
                {params.slug === "searchtorrent" && <Shield className="h-10 w-10 text-white" />}
                {params.slug === "getmetadata" && <Database className="h-10 w-10 text-white" />}
                {params.slug === "booklib" && <Server className="h-10 w-10 text-white" />}
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white">{project.title}</h1>
            <p className={`text-xl text-transparent bg-clip-text bg-gradient-to-r ${project.accent} font-medium`}>
              {project.subtitle}
            </p>
            <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">{project.description}</p>
          </div>

          {/* Project Image with Overlay */}
          {project.image && (
            <div className="mb-16 relative">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 rounded-lg"></div>
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl border border-slate-700/50"
              />
              {/* Floating stats on image */}
              <div className="absolute bottom-4 left-4 z-20 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3">
                <div className="text-emerald-400 text-sm font-medium">Status: Production</div>
              </div>
              <div className="absolute top-4 right-4 z-20 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-lg p-3">
                <div className="text-blue-400 text-sm font-medium">Version: 2.1.0</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Visual Elements */}
      <section className="py-16 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <ProjectVisualElements projectType={params.slug as any} />
        </div>
      </section>

      {/* Features */}
      <section className="py-16 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Основные возможности</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {project.features.map((feature, index) => (
              <div key={index} className="relative group">
                {/* Floating decoration */}
                <div
                  className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-gradient-to-r ${project.accent} opacity-60 z-10 group-hover:opacity-100 transition-opacity`}
                ></div>

                <Card className="bg-slate-900/60 backdrop-blur-sm border-slate-700/50 hover:bg-slate-900/80 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-r ${project.accent} group-hover:scale-110 transition-transform`}
                      >
                        {feature.icon}
                      </div>
                      <CardTitle className="text-white text-lg group-hover:text-blue-300 transition-colors">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">{feature.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-slate-950/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Технологический стек</h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {project.techStack.map((tech, index) => (
              <Badge
                key={index}
                className={`bg-gradient-to-r ${project.accent} text-white px-4 py-2 text-sm hover:scale-105 transition-transform shadow-lg hover:shadow-blue-500/25`}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Sections */}
      {project.architecture && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Особенности архитектуры</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-900/60 border-slate-700/50">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {project.architecture.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {project.security && (
        <section className="py-16 bg-slate-950/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Безопасность</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-900/60 border-slate-700/50">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {project.security.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <Shield className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {project.apiFeatures && (
        <section className="py-16 bg-slate-950/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">API возможности</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-900/60 border-slate-700/50">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {project.apiFeatures.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <Code className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {project.useCases && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Сценарии использования</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="bg-slate-900/60 border-slate-700/50">
                <CardContent className="p-8">
                  <ul className="space-y-4">
                    {project.useCases.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-300">
                        <Zap className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {(project.userFeatures || project.adminFeatures) && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Функциональность</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {project.userFeatures && (
                <Card className="bg-slate-900/60 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Users className="h-5 w-5" />
                      Пользовательские функции
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.userFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}

              {project.adminFeatures && (
                <Card className="bg-slate-900/60 border-slate-700/50">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                      <Lock className="h-5 w-5" />
                      Административные функции
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {project.adminFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-slate-300">
                          <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-4 mb-6">
            <Button asChild className={`bg-gradient-to-r ${project.accent} hover:opacity-90 shadow-lg`}>
              <Link href="/">Вернуться к портфолио</Link>
            </Button>
            {!project.isPrivate && project.githubUrl && (
              <Button asChild variant="outline" className="border-slate-600 hover:bg-slate-800">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  Исходный код
                </a>
              </Button>
            )}
          </div>
          <p className="text-slate-400">© 2024 Garnlzerx. Все права защищены.</p>
        </div>
      </footer>
    </div>
  )
}

export async function generateStaticParams() {
  return [{ slug: "pingflow" }, { slug: "searchtorrent" }, { slug: "getmetadata" }, { slug: "booklib" }]
}
