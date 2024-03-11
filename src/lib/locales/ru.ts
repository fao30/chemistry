import type { Dictionary } from "@/types";

export const getRussianDictionary = (): Dictionary => ({
  elementCategories: {
    OTHER_NONMETALS: "Другие неметаллы",
    NOBLE_GASSES: "Благородные газыs",
    ALKALI_METALS: "Щелочные металлы",
    ALKALINE_EARTH_METALS: "Щелочно-земельные металлы",
    POST_TRANSITION_METALS: "Пост-переходные металлы",
    METTALOIDS: "Металлоиды",
    ACTINIDES: "Актиниды",
    LANTHANIDES: "Лантаноиды",
    TRANSITION_METALS: "Переходные металлы",
  },

  tableFounder: {
    name: "Дми́трий Ива́нович Менделе́ев",
    birthDate: new Date("1834-02-09"),
    deathDate: new Date("1907-02-02"),
    history: {
      text1:
        "Гениальный русский ученый, профессор, член Академии наук, обладатель энциклопедических знаний по химии, физике, географии, экономике. Ученым был открыт и сформулирован один из фундаментальных законов природы периодический закон химических элементов. Над своей системой Менделеев работал с 1869 по 1900 года.",
      text2:
        "Стоит упомянуть, что при создании своей системы Менделеев оставил пустыми некоторые клеточки таблицы и предвосхитил открытие таких элементов, галлий, скандий, германий, полоний, астат, технеций, рений и франций. Химик вычислил их атомные массы и указал основные свойства, однако сами элементы были открыты позднее.",
      text3: "Умер ученый в 1907 году, в возрасте 72 лет.",
    },
  },
  crystalStructures: {
    SIMPLE_HEXAGONAL: "Простой шестиугольник",
    FACE_CENTERED_CUBIC: "Гранецентрированной куб",
    BODY_CENTERED_CUBIC: "Телоцентрированный куб",
    SIMPLE_TRIGONAL: "Простой Треугольник",
    BASE_CENTERED_MONOCLINIC: "Основоцентрированный Моноклин",
    TETRAHEDRAL_PACKING: "Тетраэдрическая Упаковка",
    SIMPLE_TRICLINIC: "Простой Триклин",
    FACE_CENTERED_ORTHORHOMBIC: "Гранецентрированный Ромб",
    BASE_CENTERED_ORTHORHOMBIC: "Основоцентрированный Ромб",
  },

  colors: {
    COLORLESS: "Бесцветный",
    SILVER: "Серебряный",
    SLATE_GRAY: "Серый сланец",
    BLACK: "Чёрный",
    GRAY: "Серый",
    YELLOW: "Жёлтый",
  },

  phase: {
    GAS: "Газ",
    SOLID: "Твердое тело",
  },

  unit: {
    density: "грамм/см-3",
    heatOfFusion: "кДж/моль",
    heatOfVaporization: "кДж/моль",
    specificHeatCapacity: "Дж/грамм·K",
    atomicRadius: "pm",
    ionizationPotential: "эВ",
    atomicVolume: "см-3/_моль",
    thermalConductivity: "W/см·K",
  },

  titles: {
    group: "Группа",
    period: "Период",
    block: "Блок",
    protons: "Протоны",
    electrons: "Электроны",
    neutrons: "Нейтроны",
    generalProperties: "Главные свойства",
    atomicNumber: "Атомный номер",
    atomicWeight: "Атомный вес",
    massNumber: "Массовое число",
    category: "Категория",
    color: "Цвет",
    radioactive: "Радиоактивность",
    crystalStructure: "Кристаллическая структура",
    history: "История",
    electronConfiguration: "Электронная конфигурация",
    electronsPerShell: "Электронов на оболочку",
    physicalProperties: "Физические свойства",
    abudanceInEarthCrust: "Избыток на Земле",
    abudanceInUniverse: "Избыток во Вселенной",
    casNumber: "Номер CAS",
    pubchem: "Номер PubChem CID",
    atomicProperties: "Атомные Свойства",
    atomicRadius: "Атомный радиус",
    covalentRadius: "Ковалентный радиус",
    electronegativity: "Электроотрицательность",
    ionizationPotential: "Ионизационный потенциал",
    atomicVolume: "Атомный объем",
    thermalConductivity: "Теплопроводность",
    oxidationStates: "Состояния окисления",
    applications: "Применения",
    isotopes: "Изотопы",
    stable: "Стабильные",
    unstable: "Нестабильные",
    phase: "Фаза",
    density: "Плотность",
    meltingPoint: "Температура плавления",
    boilingPoint: "Температура кипения",
    heatOfFusion: "Теплота плавления",
    heatOfVaporization: "Теплота парообразования",
    specificHeatCapacity: "Удельная теплоемкость",
    yes: "Да",
    no: "Нет",
    symbol: "Символ",
    title: "Название",
  },

  elements: {
    H: {
      name: "Водород",
      nameOrigin: "От греческих слов гидро (вода) и генез (формирование)",
      description: "Водород является основным компонентом Юпитера и других газовых планет-гигантов",
      history:
        "Генри Кавендиш первым выделил водород из других газов в 1766 году, когда он получил его путем реакции соляной кислоты с цинком.\n\nВ 1670 году английский ученый Роберт Бойль проводил наблюдения выделения водорода при реакции сильных кислот с металлами.\n\nФранцузский ученый Антуан Лавуазье позже назвал этот элемент водородом в 1783 году.",
      applications:
        "Жидкий водород используется как ракетное топливо.\n\nВодород обычно используется на электростанциях в качестве теплоносителя в генераторах.\n\nДва более тяжёлых изотопа водорода (дейтерий и тритий) используются в ядерном синтезе.\n\nИспользуется в качестве защитного газа в методах сварки, таких как сварка атомарным водородом.",
      toxicity: "Водород представляет ряд опасностей: от пожара при смешивании с воздухом до удушающего действия в чистом виде",
    },
    He: {
      description: "В отличие от любого другого элемента, гелий остается жидким до абсолютного нуля при нормальном давлении",
      name: "Гелий",
      nameOrigin: "От греческого слова гелиос - солнце",
      history:
        "Французский астроном Жюль Янссен получил первое свидетельство наличия гелия во время солнечного затмения 1868 года.\n\nНорман Локьер и Эдвард Франкланд предложили название гелий для нового элемента.\n\nВ 1895 году сэр Уильям Рамзи обнаружил гелий в урановом минерале клевеите.\n\nОн был независимо обнаружен в клевите Пер Теодором Клеве и Абрахамом Ланглетом.",
      applications:
        "Гелий используется в качестве защитного газа при выращивании кристаллов кремния и германия, в производстве титана и циркония, а также в газовой хроматографии.\n\nГелий при низких температурах используется в криогенике.\n\nГелий используется для наполнения воздушных шаров и для создания давления в ракетах на жидком топливе.\n\nГелий используется в качестве защитного газа в процессах дуговой сварки.",
      toxicity: "Сведения о токсичности гелия отсутствуют",
    },
    Li: {
      description: "Литий — единственный металл, который при нормальных условиях реагирует с азотом",
      name: "Литий",
      nameOrigin: "От греческого слова литос, камень",
      history:
        "Литий был открыт Иоганном Арфведсоном в 1817 году, когда он исследовал минералы с острова Уто в Швеции.\n\nЧистый металл был выделен в следующем году независимо друг от друга шведским химиком Уильямом Томасом Бранде и английским химиком сэром Хамфри Дэви.\n\nВ 1855 году Роберт Бунзен и Август Маттиссен произвели большее количество лития путем электролиза хлорида лития.",
      toxicity: "Литий вызывает коррозию и требует особого обращения для избегания контакта с кожей",
      applications:
        "Чистый металлический литий используется в литий-ионных аккумуляторах.\n\nСтеарат лития используется как универсальная высокотемпературная смазка.\n\nЛитий используется в специальных стёклах и керамике.\n\nМеталлический литий и его сложные гидриды используются в качестве высокоэнергетических добавок к ракетному топливу.",
    },
    Be: {
      name: "Бериллий",
      nameOrigin: "От греческого слова бериллос, берилл",
      history:
        "Луи-Николя Воклен открыл бериллий в оксидной форме как в бериллах, так и в изумрудах в 1798 году.\n\nФридрих Велер и Антуан Бюсси независимо выделили бериллий в 1828 году путем химической реакции металлического калия с хлоридом бериллия.\n\nПервый коммерчески успешный процесс производства бериллия был разработан в 1932 году Альфредом Штоком и Гансом Гольдшмидтом.",
      description: "Изумруд — это встречающееся в природе соединение бериллия",
      toxicity: "Бериллий и его соли токсичны, и с ними следует обращаться с величайшей осторожностью",
      applications:
        "Бериллий используется в ядерных реакторах в качестве отражателя или замедлителя.\n\nМеталлический бериллий используется для изготовления лёгких конструктивных элементов в оборонной и аэрокосмической промышленности в высокоскоростных самолетах, управляемых ракетах, космических аппаратах и спутниках.\n\nВ отличие от большинства металлов, бериллий практически прозрачен для рентгеновских лучей, поэтому он используется в оконных проёмах для рентгеновских трубок.",
    },

    B: {
      name: "Бор",
      nameOrigin: "От арабского слова Бурак, персидского Бура",
      history:
        "Соединения бора были известны тысячи лет, но этот элемент был открыт только в 1808 году сэром Хамфри Дэви, Гей-Люссаком и Тенаром.\n\nБор не был признан элементом, пока он не был выделен в 1808 году сэром Хамфри Дэви, Жозефом Луи Гей-Люссаком и Луи Жаком Тенаром.\n\nЙенс Якоб Берцелиус определил бор как элемент в 1824 году.",
      description: "Бор — важное питательное вещество для всех зелёных растений",
      applications:
        "Оксид бора используется в производстве стекла и керамики.\n\nБура используется в производстве стекловолокна в качестве очищающей жидкости, смягчителя воды, инсектицида, гербицида и дезинфицирующего средства.\n\nБорная кислота используется как мягкий антисептик и антипирен.\n\nБорная защита используется в качестве контроля для ядерных реакторов.",
      toxicity: "Элементарный бор, оксид бора, борная кислота, бораты и многие борорганические соединения нетоксичны",
    },

    C: {
      name: "Углерод",
      nameOrigin: "От латинского слова карбо уголь",
      history:
        "Углерод был открыт в доисторические времена и был известен в форме сажи и древесного угля древнейшим человеческим цивилизациям.\n\nВ 1772 году Антуан Лавуазье показал, что алмазы представляют собой форму углерода, когда он сжёг образцы древесного угля и алмаза и обнаружил, что ни один из них не даёт воды.\n\nВ 1779 году Карл Вильгельм Шееле показал, что графит сгорает с образованием углекислого газа и, следовательно, должен быть другой формой углерода.",
      applications:
        "Углерод, помимо продуктов питания и древесины, в основном используется в форме углеводородов, в первую очередь в виде ископаемого топлива, метана и сырой нефти.\n\nГрафит используется для кончиков карандашей, высокотемпературных тиглей, сухих ячеек, электродов и в качестве смазки.\n\nАлмазы используются в ювелирном деле и в промышленности для резки, сверления, шлифования и полировки.\n\nТехнический углерод используется в качестве чёрного пигмента в печатной краске.",
      toxicity:
        "Чистый углерод имеет чрезвычайно низкую токсичность для человека и может безопасно применяться в виде графита или древесного угля",
      description: "Около 20% веса живых организмов составляет углерод",
    },
    O: {
      name: "Кислород",
      nameOrigin: "От греческого слова оксис - кислота, и генез - формирование",
      history:
        "Карл Вильгельм Шееле получил кислород путем нагревания оксида ртути и нитратов в 1771 году, но не публиковал свои открытия до 1777 года.\n\nДжозеф Пристли также подготовил этот новый воздух к 1774 году.\n\nНазвание кислород было придумано в 1777 году Антуаном Лавуазье, чьи эксперименты с кислородом помогли дискредитировать популярную тогда теорию горения и коррозии флогистона.",
      toxicity:
        "Газообразный кислород может быть токсичным при повышенном парциальном давлении, приводя к судорогам и другим проблемам со здоровьем",
      applications:
        "Чистый кислород часто используется для облегчения дыхания пациентов с респираторными заболеваниями.\n\nКислород используется при кислородно-ацетиленовой сварке, как окислитель для ракетного топлива, а также при производстве метанола и окиси этилена.\n\nОн также используется в производстве стали, пластмасс и текстиля.\n\nДля дыхания растения и животные используют кислород.",
      description: "Зеленый и красный цвета в Северном сиянии обусловлены атомами кислорода",
    },
    N: {
      name: "Азот",
      nameOrigin: "От латинского слова нитриум, греческого нитрон - пищевая сода, и генез - формирование",
      history:
        "Считается, что азот был открыт шотландским врачом Дэниелом Резерфордом в 1772 году, который назвал его ядовитым воздухом или неподвижным воздухом.\n\nПримерно в то же время его изучали Карл Вильгельм Шееле, Генри Кавендиш и Джозеф Пристли.\n\nВ 1790 году французский химик Жан-Антуан-Клод Шапталь назвал элемент азотом.",
      toxicity:
        "Быстрое выделение газообразного азота в замкнутое пространство может вытеснить кислород и, таким образом, представляет опасность удушья",
      applications:
        "Азот используется для производства аммиака и удобрений, жизненно важных для современных методов производства продуктов питания.\n\nЖидкий азот используется в качестве хладагента.\n\nАзотная кислота используется в качестве окислителя в жидкостных ракетах.\n\nАзот входит в состав молекул всех основных классов лекарств в фармакологии и медицине.",
      description: "Азот присутствует во всех живых организмах, в белках, нуклеиновых кислотах и других молекулах",
    },
    F: {
      name: "Фтор",
      nameOrigin: "От латинского и французского слов флури - поток",
      history:
        "В 1529 году Георигиус Агрикола описал использование плавикового шпата в качестве флюса.\n\nВ 1670 году Генрих Швандхард обнаружил, что стекло травится при воздействии плавикового шпата, обработанного кислотой.\n\nВ 1810 году французский ученый Андре-Мари Ампер предположил, что плавиковая кислота представляет собой соединение водорода с новым элементом.\n\nЭлемент был окончательно выделен в 1886 году Анри Муассаном.",
      applications:
        "Соединения фтора, включая фторид натрия, используются в зубной пасте и питьевой воде для предотвращения кариеса.\n\nГидрохлорфторуглероды (ГХФУ) и гидрофторуглероды (ГФУ) теперь служат заменой хладагентам на основе ХФУ.\n\nФтор и его соединения используются при переработке ядерного топлива.",
      toxicity: "Фтор очень токсичен и вызывает коррозию",
      description: "Фтор бурно реагирует с водой с образованием кислорода",
    },
    Ne: {
      name: "Неон",
      nameOrigin: "От греческого слова неос - новый",
      history:
        "Неон был открыт в 1898 году британскими химиками сэром Уильямом Рамзи и Моррисом Траверсом в Лондоне.\n\nЭто было обнаружено, когда Рамзи охладил образец воздуха до превращения в жидкость, затем нагрел жидкость и улавливал газы по мере их выкипания.\n\nПосле 1902 года компания Жоржа Клода, Air Liquide, производила промышленное количество неона в качестве побочного продукта его бизнеса по производству сжиженного воздуха.",
      applications:
        "Неон часто используют в ярко освещённых рекламных вывесках.\n\nОн также используется в электронных лампах, высоковольтных индикаторах, разрядниках, волноводных трубках, телевизионных трубках и гелий-неоновых лазерах.\n\nЖидкий неон используется как криогенный хладагент.",
      toxicity: "Сведения о токсичности неона отсутствуют",
      description: "В вакуумной газоразрядной трубке неон светится красновато-оранжевым светом",
    },
    Na: {
      name: "Натрий",
      nameOrigin: "От английского слова сода и среднелатинского соданиум - лекарство от головной боли",
      history:
        "Химическое сокращение натрия было впервые опубликовано Йенсом Якобом Берцелиусом в его системе атомных символов.\n\nЭто сокращение от нового латинского названия элемента «натрий», которое относится к египетскому «натрону», природной минеральной соли, в основном состоящей из гидратированного карбоната натрия.\n\nВ 1807 году сэр Хамфри Дэви впервые выделил натрий электролизом высушенного гидроксида натрия, который был слегка увлажнен.",
      applications:
        "Металлический натрий абсолютно необходим при производстве сложных эфиров и органических соединений.\n\nНатриевые лампы часто используются для уличного освещения в городах.\n\nЖидкий натрий используется в качестве теплоносителя в некоторых быстрых реакторах.\n\nНатрий также используется в качестве легирующего металла, средства против образования накипи и в качестве восстановителя металлов, когда другие материалы неэффективны.",
      toxicity:
        "С металлическим натрием следует обращаться с большой осторожностью, так как его нельзя поддерживать в инертной атмосфере",
      description: "Натрий горит на воздухе ярким жёлтым пламенем",
    },
    Mg: {
      name: "Магний",
      nameOrigin: "От слова Магнезия - название района в Тессалии",
      history:
        "Шотландский химик Джозеф Блэк признал магний элементом в 1755 году.\n\nВпервые магний был выделен сэром Хамфри Дэви в 1808 году в Лондоне.\n\nОн использовал электролиз на смеси оксида магния и ртути.\n\nАнтуан Бюсси подготовил его в связной форме в 1831 году.",
      applications:
        "Магний широко используется в производстве мобильных телефонов, портативных компьютеров, фотоаппаратов и других электронных компонентов.\n\nЯркий свет, который он излучает при воспламенении, используется в фотографии, осветительных ракетах, пиротехнике и зажигательных бомбах.\n\nСоединения магния, такие как гидроксид (молоко магнезии), сульфат (английская соль), хлорид и цитрат, используются в лечебных целях.",
      toxicity:
        "Поскольку могут возникнуть серьезные пожары, следует проявлять особую осторожность при обращении с металлическим магнием",
      description: "Когда он горит на воздухе, магний излучает яркий белый свет",
    },
    Al: {
      name: "Алюминий",
      nameOrigin: "От латинского слова алумен - квасцы",
      history:
        "В 1761 году Гайтон де Морво предложил название глинозем для основания в квасцах, а Антуан Лавуазье в 1787 году подумал, что это оксид еще не открытого металла.\n\nСэр Хамфри Дэви определил существование металлической основы из квасцов в 1808 году.\n\nГанс Кристиан Эрстед был первым, кто в 1825 году выделил металлический алюминий в нечистой форме.\n\nСчитается, что Фридрих Веллер выделил этот металл в 1827 году.",
      applications:
        "Алюминий используется в широком спектре продуктов: от банок для напитков до оконных рам, от лодок до самолётов.\n\nИспользуется в линиях электропередачи.\n\nОн также используется для изготовления кухонной утвари, внешней отделки зданий и в тысячах промышленных применений.\n\nПри легировании небольшими количествами меди, магния, кремния, марганца или других элементов придаёт множество полезных свойств.",
      toxicity: "Сведения о токсичности алюминия отсутствуют",
      description: "Алюминий не прилипает к магнитам в нормальных условиях",
    },
    Si: {
      name: "Кремнмй",
      nameOrigin: "От латинского слова силекс - песок",
      history:
        "В 1800 году сэр Хамфри Дэви считал кремнезем составом, а не элементом.\n\nНо в 1811 году Гей Люссак и Луи Жак Тенар, вероятно, получили нечистый аморфный кремний путем нагревания калия с тетрафторидом кремния.\n\nВ 1824 году Йенс Якоб Берцелиус получил аморфный кремний тем же общим методом.\n\nАнри Девиль в 1854 году впервые получил кристаллический кремний, вторую аллотропную форму элемента.",
      applications:
        "В виде песка и глины он используется для изготовления бетона и кирпича.\n\nЭто полезный огнеупорный материал для высокотемпературных работ, а в виде силикатов он используется для изготовления эмалей, гончарных изделий и т.д.\n\nКремнезём, как и песок, является основным ингредиентом стекла.\n\nКремниевые чипы — это основа современной электроники и вычислительной техники.\n\nКарбид кремния, чаще называемый карборундом, используется в абразивных материалах.",
      toxicity: "Вдыхание в виде мелкодисперсной кремнеземной/силикатной пыли может вызвать хронические проблемы с дыханием",
      description: "Кремний обладает необычным свойством — он расширяется при замерзании",
    },
    P: {
      name: "Фосфор",
      nameOrigin: "От греческого слова фосфорос - светоносный; старое название планеты Венера при появлении до восхода солнца",
      history:
        "Хенниг Бранд открыл фосфор в 1669 году в Германии в Гамбурге, получив его из мочи.\n\nВ 1769 году Йохан Готлиб Ган и Карл Вильгельм Шееле показали, что фосфат кальция содержится в костях, и они получили элементарный фосфор из костной золы.\n\nАнтуан Лавуазье признал фосфор элементом в 1777 году.",
      applications:
        "Многие удобрения содержат большое количество фосфора и производятся из концентрированной фосфорной кислоты.\n\nФосфор используется в производстве безопасных спичек, пиротехники и зажигательных снарядов.\n\nФосфор также используется в производстве стали и фосфорной бронзы.",
      toxicity: "Белый фосфор очень токсичен, в то время как красный фосфор считается нетоксичным",
      description: "Элементный фосфор существует в двух основных формах — белый фосфор и красный фосфор",
    },
    S: {
      name: "Сера",
      nameOrigin: "Известен древним, упоминается в Книге Бытия как сера",
      history:
        "К третьему веку нашей эры китайцы обнаружили, что серу можно извлекать из пирита.\n\nИндийские алхимики много писали об использовании серы в алхимических операциях с ртутью, начиная с восьмого века нашей эры.\n\nВ 1777 году Антуан Лавуазье помог убедить научное сообщество, что сера — это элемент, а не соединение.",
      applications:
        "Основное коммерческое использование серы — это реагент при производстве серной кислоты.\n\nСера является компонентом чёрного пороха и используется при вулканизации натурального каучука и в качестве фунгицида.\n\nОн используется для изготовления сульфитной бумаги и другой бумаги, для фумигации фумиганта и для отбеливания сухофруктов.\n\nОн также широко используется при производстве фосфатных удобрений.",
      toxicity: "Элементарная сера считается малотоксичной",
      description: "Пенициллин — натуральный антибиотик на основе серы",
    },
    Cl: {
      name: "Хлор",
      nameOrigin: "От греческого слова хлоро - жёлто-зелёный",
      history:
        "Около 1630 года бельгийский химик и врач Ян Баптист ван Гельмонт признал хлор газом.\n\nЭлементарный хлор был впервые получен и изучен в 1774 году шведским химиком Карлом Вильгельмом Шееле.\n\nК 1810 году научный консенсус заключался в том, что хлор на самом деле был соединением, содержащим кислород.\n\nВ 1811 году сэр Хэмфри Дэви пришел к выводу, что новый газ на самом деле является новым элементом.",
      applications:
        "Хлор используется для производства безопасной питьевой воды.\n\nОн также широко используется в производстве бумажных изделий, красителей, текстиля, нефтепродуктов, лекарств, антисептиков, инсектицидов, продуктов питания, растворителей, красок, пластмасс и многих других потребительских товаров.\n\nХлорированные соединения используются в основном для очистки, отбеливания целлюлозы, дезинфицирующих средств и обработки текстиля.",
      toxicity: "Элементарный хлор в высоких концентрациях чрезвычайно опасен и ядовит",
      description: "В коже древесных лягушек содержится хлор, который является очень сильным обезболивающим",
    },
    Ar: {
      name: "Аргон",
      nameOrigin: "От греческого слова аргос - неактивный",
      history:
        "Генри Кавендиш подозревал, что аргон присутствует в воздухе в 1785 году.\n\nОн был выделен в 1894 году лордом Рэли и сэром Уильямом Рамзи в Шотландии.\n\nАргон стал первым из обнаруженных благородных газов.\n\nВ 1957 году ИЮПАК согласился, что символ должен измениться с A на Ar.",
      applications:
        "Газ аргон используется для заполнения обычных ламп накаливания и люминесцентных ламп.\n\nАргон также используется в качестве защиты от инертного газа при дуговой сварке и резке, в качестве защитного покрытия при производстве титана и других реактивных элементов.\n\nОн используется в качестве защитной атмосферы для выращивания кристаллов кремния и германия.",
      toxicity: "Аргон считается нетоксичным",
      description: "Аргон создаёт отличительный сине-зеленый газовый лазер",
    },
    K: {
      name: "Калий",
      nameOrigin: "От английского слова поташ - горшок с пеплом, латинского калиум и арабского кали алькали",
      history:
        "Металлический калий был впервые выделен в 1807 году сэром Хамфри Дэви, который получил его из каустического калия путём электролиза расплавленной соли с помощью недавно открытой гальванической ванны.\n\nКалий был первым металлом, выделенным электролизом.",
      applications:
        "Наибольшим спросом пользуются калийные удобрения.\n\nКалий является важным компонентом для роста растений и содержится в большинстве почв.\n\nНитрат калия — главный взрывчатый ингредиент пороха.\n\nГидроксид калия используется в производстве мягкого мыла и в качестве электролита в щелочных батареях.",
      toxicity: "С калием необходимо обращаться с большой осторожностью, обеспечивая полную защиту кожи и глаз",
      description: "Люди, в рационе которых мало калия, могут страдать от гипокалиемии",
    },
    Ca: {
      name: "Кальций",
      history:
        "Кальций был известен еще в первом веке, когда древние римляне получали известь в виде оксида кальция.\n\nКальций был впервые выведен сэром Хэмфри Дэви в 1808 году, когда он электролизовал смесь извести и оксида ртути.\n\nКогда он услышал, что Йенс Якоб Берцелиус и Понтин приготовили амальгаму кальция путем электролиза извести в ртути, он попробовал это сам.",
      applications:
        "Кальций используется для удаления кислорода, серы и углерода из сплавов.\n\nОн также используется в качестве легирующего агента при производстве сплавов алюминия, бериллия, меди, свинца и магния.\n\nКальций используется в качестве восстановителя при извлечении других металлов, таких как уран, цирконий и торий.\n\nКарбонат кальция используется в производстве цемента и строительного раствора, извести и известняка.",
      nameOrigin: "От латинского слова калькс - лайм",
      description: "Скорлупа яйца состоит в основном из карбоната кальция",
      toxicity: "Кальций считается нетоксичным",
    },
    Sc: {
      name: "Скандий",
      nameOrigin: "От латинского слова Скандия - Скандинавия",
      history:
        "В 1879 году Ларс Фредрик Нильсон и его команда обнаружили скандий в минералах эвксените и гадолините.\n\nНильсон приготовил 2 грамма оксида скандия высокой чистоты.\n\nПер Теодор Клев показал, что скандий обладает свойствами, аналогичными тем, которые Менделеев предсказал для эка-бора.\n\nМеталлический скандий впервые был получен в 1937 году Фишером и его коллегами.",
      applications:
        "Скандий используется в спортивном оборудовании, таком как валы для гольфа, бейсбольные биты, велосипедные рамы и удочки.\n\nЙодид скандия вместе с йодидом натрия при добавлении к модифицированной форме ртутной лампы даёт форму металлогалогенной лампы.\n\nРадиоактивный изотоп 46Sc используется на нефтеперерабатывающих заводах в качестве отслеживающего агента.\n\n",
      toxicity: "Скандий считается малотоксичным",
      description: "Стабильная форма скандия создается в сверхновых с помощью r-процесса",
    },
    Ti: {
      name: "Титан",
      nameOrigin: "От латинского слова титанс - первые сыновья Земли (греческая мифология)",
      history:
        "Уильям Грегор обнаружил оксид титана в ильмените в 1791 году.\n\nМартин Генрих Клапрот независимо открыл элемент в рутиле в 1795 году и назвал его.\n\nЧистая металлическая форма была получена только в 1910 году Мэтью А. Хантером.\n\nВ 1936 году Процесс Кролла сделал возможным промышленное производство титана.",
      applications:
        "Титан используется в стали в качестве легирующего элемента для уменьшения размера зерна и в качестве раскислителя, а также в нержавеющей стали для уменьшения содержания углерода.\n\nТитан потенциально может использоваться в опреснительных установках для преобразования морской воды в пресную.\n\nТитан используется в нескольких повседневных изделиях, таких как свёрла, велосипеды, клюшки для гольфа, часы и портативные компьютеры.",
      description: "Титан — один из немногих элементов, который горит в чистом газообразном азоте",
      toxicity: "Металлический титан считается нетоксичным",
    },
  },
});
