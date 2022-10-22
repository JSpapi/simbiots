// ! disable buttons
const Btns = document.querySelectorAll("button");
Btns.forEach((button) => {
  button.addEventListener("click", (e) => e.preventDefault());
});

// !SLIDERS START -----------------------------------------------------------------

// !CONTENT SLIDER LINKS
$(document).ready(function () {
  $(".events__slider").slick({
    slidesToShow: 4,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 1000,
    pauseOnFocus: false,

    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

const sliderLinks = () => {
  const sliderImgs = [
    {
      sliderImg: "./images/pictures/slider/sliderLinks-1.jpg",
      imgName: "Spider-Man 3",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-2.webp",
      imgName: "god of symbiotes",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-3.webp",
      imgName: "comics",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-4.jpg",
      imgName: "miles moralis 2 game",
    },
    {
      sliderImg: "./images/pictures/slider/sliderLinks-5.jpg",
      imgName: "carnage",
    },
    {
      sliderImg: "./images/pictures/slider/slider-1.png",
      imgName: "simbiots",
    },
  ];

  createSliderItems(sliderImgs);
};

const createSliderItems = (sliderImgs) => {
  const sliderParent = document.querySelector(".events__slider");

  const newSliderImg = sliderImgs
    .map(({ sliderImg, imgName }) => {
      return `
        <div class="events__slider-item">
          <a href="https://marvel.fandom.com/wiki/Knull_(Earth-616)" target="_blank" >
            <img class="events__slider-img" src="${sliderImg}"  alt="${imgName}" />
          </a>
        </div>
    `;
    })
    .join("");

  if (sliderParent) {
    sliderParent.innerHTML = newSliderImg;
  } else {
    return;
  }
};

// !CONTENT SLIDER LINKS END
// !COMICS SECTION

// !COMICS HEADER SLIDER

// !CONTENT SLIDER LINKS
$(document).ready(function () {
  $(".comics__slider").slick({
    arrows: false,
    dots: false,
    speed: 2000,
    fade: true,
    infinite: true,
    autoplay: true,
    pauseOnHover: false,
    pauseOnFocus: false,
  });
});
// !COMICS HEADER SLIDER END
// !ORIGINS  SLIDER

const originsSlider = () => {
  const originItems = [
    {
      id: 1,
      img: "./images/pictures/origins/1.jpg",
      character: "Knull Good Of Simbiots",
      features: "Create Symbiots",
      info: "Knull is an eldritch god of darkness and the creator of the symbiotes. Born from the primordial void that existed between the sixth and seventh cosmos,[19] Knull claims dominion over the void and to be its avatar, but while he is a God of the Void he is not the primordial darkness itself.[14] Awakened by the Light when the Celestials invaded his kingdom of darkness, he created the first symbiote in the form of a sword and decapitated a Celestial. He used the head's divine power to refine the blade, creating a metaphysical connection between the primordial symbiote and the slain cosmic god - which would be the source of most of Knull's tremendous power.[20] Waging war against the Light, Knull became a legendary figure of divine terror but eventually found himself stranded on a nameless planet after an inhabitant stole his blade and unwittingly followed in his footsteps. Experimenting with his powers, Knull discovered he could create amorphous parasites from the darkness he controls and merge them with 'lesser creatures', so he decided to use this as a way to corrupt the Light",

      quote:
        "Child... I am Knull. Lord of the Abyss. God of the Symbiotes. The darkness inside of you? That darkness bows to me. I am the Void",
    },
    {
      id: 2,
      img: "./images/pictures/origins/2.jpg",
      character: "Gorr the God Butcher",
      features: "All-Black the Necrosword Weapon",
      info: "Stricken with grief after Agar's death, Gorr gave up hope and outwardly expressed his belief that there were no gods, for which he was exiled by his superstitious people. While wandering the desert praying to die, Gorr witnessed a pair of battling gods—a dark elder god called Knull and a gold-armored purple-skinned god empowered by the Enigma Force plunge out of the sky and crash-land nearby. Shocked by the realization that gods did exist, Gorr was enraged when the gold-armored god begged for help; the dark god's sword transforming into an amorphous mass of living darkness and bonding to him. Gorr used his new weapon, All-Black the Necrosword, to kill the gold-armored god; then vowed to seek vengeance against all gods for never answering his prayers, and set out to kill them all. Gorr despised any god and travelled the cosmos for thousands of years to exact his revenge, embarking on a deicidal crusade in which he allegedly killed many gods of fear, war, chaos, genocide, revenge, plagues, earthquakes, blood, wrath, jealousy, death, degradation, and a few gods of poetry and flowers.",

      quote:
        "IT DOESN’T FEEL LIKE A CURSE. IT FEELS LIKE A PROMISE, SO THIS IS MY VOW: ALL GODS WILL DIE",
    },
    {
      id: 3,
      img: "./images/pictures/origins/3.jpg",
      character: "Anti-Venom (Symbiote)",
      features: "make superhuman that stronger than spider man",
      info: "Years later, Dr. Steven used elements of the Anti-Venom symbiote to create a new cure for the Venom symbiote's toxic shock syndrome that could adapt alongside it. When high concentrations of this serum was exposed to the Venom symbiote's biomass bonded to Flash Thompson, the Anti-Venom symbiote was artificially recreated.However, when Flash died at the hands of the Red Goblin, the replica died along with him.[4] During Knull's invasion to Earth, it would eventually be revived along with Flash when his consciousness (that was stored into the symbiote Hive-Mind as a codex) 'downloaded' itself into a Symbiote Dragon in the real world to battle the dark god. Flash would proceed to find his own body at the graveyard, merging with it and successfully being revived.",

      quote:
        "it chose you. It will drink your soul, leaving behind only cancerous excrement. It's not a black monster from space -- it's a black demon sent from hell. You are an addict -- a damaged and wounded animal -- you have a sickness. I am the cure!",
    },
  ];

  const sliderOriginsParent = document.querySelector(".origins__sliders");

  createSliderOrigins(originItems, sliderOriginsParent);
};

const createSliderOrigins = (originItems, sliderOriginsParent) => {
  const newOriginsSlider = originItems
    .map(({ img, character, features, info, quote }) => {
      return `
        <article class="origins__sliders-item">
              <div class="origins__sliders-img">
                <img src="${img}" alt="${character}" />
              </div>

              <div class="origins__sliders-info">
                <p class="origins__sliders-uniq">character</p>
                <p class="origins__sliders-subtitle">
                  ${character}
                </p>

                <p class="origins__sliders-uniq">features</p> 
                <p class="origins__sliders-subtitle">
                  ${features}
                </p>

                <p class="origins__sliders-text">
                  ${info}
                </p>

                <p class="origins__sliders-quote">
                  &laquo; ${quote} &raquo;
                </p>
              </div>
        </article>
    `;
    })
    .join("");
  if (sliderOriginsParent) {
    sliderOriginsParent.innerHTML = newOriginsSlider;
  } else {
    return;
  }
};

$(document).ready(function () {
  $(".origins__sliders").slick({
    arrows: true,
    dots: false,
    speed: 2000,
    infinite: true,
    autoplay: true,
    pauseOnHover: true,
    pauseOnFocus: false,
  });
});

// !ORIGINS  SLIDER END

// !SLIDERS END -----------------------------------------------------------------

const comicsCards = () => {
  const comicsCardsData = [
    {
      comicsLink: "https://en.wikipedia.org/wiki/Secret_Wars",
      comicsImg: "./images/pictures/comics/comics-1.jpg",
      comicsName: "Secret Wars",
      comicsInfo:
        'A cosmic entity called the Beyonder observes the mainstream Marvel universe. Fascinated by the presence of superheroes on Earth and their potential, this entity chooses a group of both heroes and supervillains and teleports characters against their will to "Battleworld", a planet created by the Beyonder in a distant galaxy. This world has also been stocked with alien weapons and technology. The Beyonder then declares: "I am from beyond! Slay your enemies and all that you desire shall be yours! Nothing you dream of is impossible for me to accomplish!',
    },
    {
      comicsLink: "https://marvel.fandom.com/wiki/Amazing_Spider-Man_Vol_1_252",
      comicsImg: "./images/pictures/comics/comics-2.jfif",
      comicsName: "Amazing Spider-Man #252 ",
      comicsInfo:
        "At the offices of the Daily Bugle, J. Jonah Jameson and Joe Robertson go over the latest edition of the newspaper, which has a cover story about the various heroes who have disappeared recently. As usual, Jameson wonders what connection these disappearances have with Spider-Man. However, Robertson",
    },
    {
      comicsLink: "https://marvel.fandom.com/wiki/Venom_(Symbiote)_(Earth-616)",
      comicsImg: "./images/pictures/comics/comics-3.webp",
      comicsName: "Venom",
      comicsInfo:
        "The symbiote that would be later known as the Venom Symbiote was spawned at some point during the reign of the dark elder god Knull. Much of the symbiote's history prior to its arrival on Battleworld is unclear, in part due to its memories having been erased, modified, or otherwise altered numerous times",
    },
    {
      comicsLink: "https://en.wikipedia.org/wiki/Absolute_Carnage",
      comicsImg: "./images/pictures/comics/comics-4.jpg",
      comicsName: "Absolute Carnage",
      comicsInfo:
        "While walking to Times Square, Eddie Brock explains to his son Dylan about how the Symbiotes were created by Knull as well as the Church of the New Darkness having resurrected Cletus Kasady. Upon arrival, Eddie notices that there are wanted posters for Venom for the deaths of Lee Price and several inmates at Ryker's Island. When they flee into the subway upon being trailed by a man in a trenchcoat, they encounter Cletus Kasady who shoves them onto the subway tracks.",
    },
  ];

  const comicsCardsParent = document.querySelector(".comics__cards");

  createComicsCards(comicsCardsData, comicsCardsParent);
};

const createComicsCards = (comicsCardsData, comicsCardsParent) => {
  const newComicsCards = comicsCardsData
    .map(({ comicsLink, comicsImg, comicsName, comicsInfo }) => {
      return `
      <a
          class="comics__card"
          href="${comicsLink}"
          target="_blank">
        <div class="comics__content">
          <div class="comics__card-front">
            <img src="${comicsImg}" alt="${comicsName}" />
          </div>
          <div class="comics__card-back">
            <p class="comics__title-back">${comicsName}</p>
            <p class="comics__desc">${comicsInfo}</p>
            <img src="${comicsImg}" alt="${comicsName}" />
          </div>
        </div>
        <span class="comics_title">${comicsImg}</span>
      </a>
    `;
    })
    .join("");

  if (comicsCardsParent) {
    comicsCardsParent.innerHTML = newComicsCards;
  } else {
    return;
  }
};

// !COMICS SECTION END

// !FILMS SECTION DATA
const films = () => {
  const filmsImg = [
    {
      id: "Spider-Man 3 (2007)",
      img: "./images/pictures/films/film-1.jpg",
    },
    {
      id: "Venom",
      img: "./images/pictures/films/film-2.jpg",
    },
    {
      id: "Venom 2",
      img: "./images/pictures/films/film-4.jpg",
    },
    {
      id: "Spider-Man Miles Morales 2",
      img: "./images/pictures/films/film-3.jpg",
    },
  ];

  const filmsCardsParent = document.querySelector(".films__links-cards");

  createFilmsCard(filmsImg, filmsCardsParent);
};

const createFilmsCard = (filmsImg, filmsCardsParent) => {
  const newFilmsCards = filmsImg
    .map(({ id, img }) => {
      return `
      <div class="films__links-card">
        <a class="films__links-img" href="#${id}">
          <img src="${img}">
        </a>
      </div>
    `;
    })
    .join("");
  if (filmsCardsParent) {
    filmsCardsParent.innerHTML = newFilmsCards;
  } else {
    return;
  }
};

// !FILMS CARDS
const filmsContent = () => {
  const filmsContentData = [
    {
      img: "./images/pictures/films/film-1.jpg",
      name: "Spider-Man 3 (2007)",
      runtime: "1 Hour 58 Minutes",
      release: "May 3 2007 (Russia)",
      age: "12+",
      genres: "Action, Adventure, Sci-Fi",
      country: "USA",
      stars: "Tobey Maguire, Kirsten Dunst, Topher Grace",
      storyline:
        "Peter Parker has finally managed to piece together the once-broken parts of his life, maintaining a balance between his relationship with Mary-Jane and his responsibility as Spider-Man. But more challenges arise for our young hero. Peter's old friend Harry Obsourne has set out for revenge against Peter; taking up the mantle of his late father's persona as The New Goblin, and Peter must also capture Uncle Ben's real killer, Flint Marko, who has been transformed into his toughest foe yet, the Sandman. All hope seems lost when suddenly Peter's suit turns jet-black and greatly amplifies his powers. But it also begins to greatly amplify.",
      imdbRate: "8",
      kinopoiskRate: "8.9",
    },
    {
      img: "./images/pictures/films/film-2.jpg",
      name: "Venom",
      runtime: "1 hour 52 minutes",
      release: "October 4, 2018 (Russia)",
      age: "16+",
      genres: "Action, Adventure, Sci-Fi",
      country: "USA",
      stars: "Tom Hardy ,Michelle Williams, Riz Ahmed",
      storyline:
        "After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
      imdbRate: "6.6",
      kinopoiskRate: "6.8",
    },
    {
      img: "./images/pictures/films/film-4.jpg",
      name: "Venom 2",
      runtime: "1 hour 37 minutes",
      release: "September 30, 2021 (Russia)",
      age: "16+",
      genres: "Action, Adventure, Sci-Fi, Thriller",
      country: "USA",
      stars: "Tom Hardy, Woody Harrelson, Michelle Williams",
      storyline:
        "Eddie Brock struggles to adjust to his new life as the host of the alien symbiote Venom, which grants him super-human abilities in order to be a lethal vigilante. Brock attempts to reignite his career by interviewing serial killer Cletus Kasady, who becomes the host of the symbiote Carnage and escapes prison after a failed execution.",
      imdbRate: "5.9",
      kinopoiskRate: "6.4",
    },
  ];

  const filmsContentParent = document.querySelector(".films__about");

  createFilmsContent(filmsContentData, filmsContentParent);
};

const createFilmsContent = (filmsContentData, filmsContentParent) => {
  const newFilmsContent = filmsContentData
    .map(
      ({
        img,
        name,
        runtime,
        release,
        age,
        genres,
        country,
        stars,
        storyline,
        imdbRate,
        kinopoiskRate,
      }) => {
        return `
      <article class="films__about-article" id="${name}">
        <div class="films__about-left">
          <div class="films__about-img">
            <img src="${img}" alt="${name}" />

            <a class="films__about-play" href="#!">
              <img src="./images/pictures/films/play2.svg" alt="play" />
            </a>
          </div>
          <div class="films__about-rating">
            <div class="films__about-kinopoisk">
              <p>${kinopoiskRate}</p>
              <p>Kinopoisk</p>
            </div>
            <div class="films__about-imdb">
              <p>${imdbRate}</p>
              <p>IMDb</p>
            </div>
          </div>
        </div>

        <div class="films__about-right">
          <h3>${name}</h3>

          <div class="films__about-making">
            <div class="films-making__info">
              <p class="films-making__text">runtime</p>
              <p class="films-making__subtext">${runtime}</p>
            </div>
            <div class="films-making__info">
              <p class="films-making__text">release date</p>
              <p class="films-making__subtext">${release}</p>
            </div>
            <div class="films-making__info">
              <p class="films-making__text">age</p>
              <p class="films-making__subtext">${age}</p>
            </div>
          </div>

            <div class="films__about-actors">
              <div class="films__actors-info">
                <p class="films__actors-text">Genres</p>
                <p class="films__actors-subtext">
                  ${genres}
                </p>
              </div>
              <div class="films__actors-info">
                <p class="films__actors-text">Country of origin</p>
                <p class="films__actors-subtext">${country}</p>
              </div>
              <div class="films__actors-info">
                <p class="films__actors-text">Stars</p>
                <p class="films__actors-subtext">
                  ${stars}
                </p>
            </div>
          </div>

            <div class="films__about-info">
              <h4 class="films-info__title">Storyline</h4>
              <p>${storyline}</p>
            </div>
        </div>
    </article>
    `;
      }
    )
    .join("");

  if (filmsContentParent) {
    filmsContentParent.innerHTML = newFilmsContent;
  } else {
    return;
  }
};

// !FILMS SECTION DATA END

// !SIMBIOTS CARDS WITH MODAL
const simbiotsInfo = () => {
  const simbiotsCards = [
    {
      simbiotsImg: "./images/pictures/simbiots/venom.png",
      simbiotsName: "Venom",
      id: 1,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/сarnage.png",
      simbiotsName: "Carnage",
      id: 2,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/toxin.png",
      simbiotsName: "Toxin",
      id: 3,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/raiot.png",
      simbiotsName: "Raiot",
      id: 4,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/antiVenom.png",
      simbiotsName: "Anti Venom",
      id: 5,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/lasher.png",
      simbiotsName: "Lasher",
      id: 6,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/screem.png",
      simbiotsName: "Screem",
      id: 7,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/symbiotDragon.png",
      simbiotsName: "Symbiot Dragons",
      id: 8,
    },
  ];

  const simbiotsFullInfo = [
    {
      simbiotsImg: "./images/pictures/simbiots/venom.png",
      simbiotsName: "Venom",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 1,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/сarnage.png",
      simbiotsName: "Carnage",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 2,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/toxin.png",
      simbiotsName: "Toxin",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 3,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/raiot.png",
      simbiotsName: "Raiot",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 4,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/antiVenom.png",
      simbiotsName: "Anti Venom",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 5,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/lasher.png",
      simbiotsName: "Lasher",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 6,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/screem.png",
      simbiotsName: "Screem",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 7,
    },
    {
      simbiotsImg: "./images/pictures/simbiots/symbiotDragon.png",
      simbiotsName: "Symbiot Dragons",
      fullInfo:
        'The new "costume" had several useful properties -- the ability to mimic other forms of clothing, a "dimensional aperture" which could store small objects without adding bulk to the costume, and its own source of webbing -- which Spider-Man initially attributed to its alien origins. After returning to Earth, the costume could not stand to be separated from Parker for very long, and it often engulfed the sleeping hero, sending him out to fight crime under its control. The then-villainous Puma -- who was fighting Spider-Man at the time -- was the',
      id: 8,
    },
  ];

  const simbiotsCardsParent = document.querySelector(".cards");
  const modalOverlay = document.querySelector(".modal__background");

  const newSimbiotsCards = simbiotsCards
    .map(({ simbiotsImg, simbiotsName, id }) => {
      return `
      <div class="card" data-target="${id}">
        <div class="card__img">
          <img src="${simbiotsImg}" alt="${simbiotsName}" />
        </div>
        <h3 class="card__title">${simbiotsName}</h3>
      </div>
    `;
    })
    .join("");

  if (simbiotsCardsParent) {
    simbiotsCardsParent.innerHTML = newSimbiotsCards;
  } else {
    return;
  }

  const createSimbiotsModal = simbiotsFullInfo
    .map(({ simbiotsImg, simbiotsName, fullInfo, id }) => {
      return `
      <div class="modal" data-name="${id}">
          <div class="modal__img">
            <img src="${simbiotsImg}" alt="${simbiotsName}" />
          </div>
          <div class="modal__info">
            <div class="modal__header">
              <h3 class="modal__title">${simbiotsName}</h3>
              <p class="modal__close">&times;</p>
            </div>
            <p class="modal__text">${fullInfo}</p>
          </div>
        </div>
    `;
    })
    .join("");

  if (modalOverlay) {
    modalOverlay.innerHTML = createSimbiotsModal;
  } else {
    return;
  }

  const allSimbiotsCards = simbiotsCardsParent.childNodes;

  allSimbiotsCards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardAttribute = card.getAttribute("data-target");

      const modals = document.querySelectorAll(".modal");
      modals.forEach((modal) => {
        const modalAttribute = modal.getAttribute("data-name");
        if (modalAttribute === cardAttribute) {
          modal.classList.add("active");
          modalOverlay.classList.add("active");
        }
        const closeModalBtn = document.querySelector(".modal__close");

        closeModalBtn.addEventListener("click", () => {
          modalOverlay.classList.remove("active");
          modal.classList.remove("active");
        });

        modalOverlay.addEventListener("click", () => {
          modal.classList.remove("active");
          modalOverlay.classList.remove("active");
        });
      });
    });
  });
};

// !SIMBIOTS CARDS WITH MODAL ends

// !light dark mode functions

const darkModeTrigger = () => {
  let darkMode = localStorage.getItem("darkMode");

  const darkModeToggle = document.querySelectorAll(".navbar__colorChanger");
  const colorIcon = document.querySelector(".colorChanger__img");
  const adaptiveColorIcon = document.querySelector(
    ".adaptive-navbar .colorChanger__img"
  );

  if (darkMode === "enabled") {
    enableDarkMode();
    colorIcon.src = "./images/icons/light-theme.svg";
    adaptiveColorIcon.src = "./images/icons/light-theme.svg";
  }

  darkModeToggle.forEach((button) => {
    button.addEventListener("click", () => {
      darkMode = localStorage.getItem("darkMode");
      if (darkMode !== "enabled") {
        enableDarkMode();
        colorIcon.src = "./images/icons/light-theme.svg";
        adaptiveColorIcon.src = "./images/icons/light-theme.svg";
      } else {
        disableDarkMode();
        colorIcon.src = "./images/icons/dark-theme.svg";
        adaptiveColorIcon.src = "./images/icons/dark-theme.svg";
      }
    });
  });
};

const enableDarkMode = () => {
  document.body.classList.add("darkMode");
  localStorage.setItem("darkMode", "enabled");
};

const disableDarkMode = () => {
  document.body.classList.remove("darkMode");
  localStorage.setItem("darkMode", null);
};

// !light dark mode functions ends

// !adaptive navbar
const adaptiveNavigationFunction = () => {
  const navbarBurger = document.querySelector(".navbar__burger");
  const navbarList = document.querySelector(".adaptive-navbar__links");

  navbarBurger.addEventListener("click", () => {
    navbarList.classList.toggle("active");
    navbarBurger.classList.toggle("close");
  });
};
// !adaptive navbar ends

// !SCROLL TO TOP
const scrollToTop = () => {
  const isShownBtn = document.querySelector(".isShown");
  if (isShownBtn) {
    window.onscroll = () => {
      if (window.scrollY >= 300) {
        isShownBtn.classList.remove("hide");
      } else {
        isShownBtn.classList.add("hide");
      }
    };

    isShownBtn.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  } else return;
};
// !SCROLL TO TOP END

const functionThatTriggerAllFunctions = () => {
  darkModeTrigger();
  adaptiveNavigationFunction();
  scrollToTop();
  sliderLinks();
  simbiotsInfo();
  comicsCards();
  originsSlider();
  films();
  filmsContent();
};

functionThatTriggerAllFunctions();
