/* =====================================================
   PROJECT GALLERIES
===================================================== */


const galleries = {

    cybertrace: {

        images: [
            "assets/cybertrace/01.png",
            "assets/cybertrace/02.png",
            "assets/cybertrace/03.png",
            "assets/cybertrace/04.png"
        ],

        current: 0

    },


    echohands: {

        images: [
            "assets/echohands/01.png",
            "assets/echohands/02.png",
            "assets/echohands/03.png"
        ],

        current: 0

    }

};



/* =====================================================
   ACHIEVEMENT GALLERIES
===================================================== */


const achievementGalleries = {


    ideathon: {

        images: [
            "assets/achievements/ideathon/01.jpeg",
            "assets/achievements/ideathon/02.jpeg"
        ],

        current: 0

    },


    presentation: {

        images: [
            "assets/achievements/presentation/01.jpeg",
            "assets/achievements/presentation/02.jpeg"
        ],

        current: 0

    },


    tinkher: {

        images: [
            "assets/achievements/tink-her-hack/01.jpeg",
            "assets/achievements/tink-her-hack/02.jpeg"
        ],

        current: 0

    },


    useless: {

        images: [
            "assets/achievements/useless-projects/01.jpeg",
            "assets/achievements/useless-projects/02.jpeg"
        ],

        current: 0

    },


    projectpresentation: {

        images: [
            "assets/achievements/project-presentation/01.jpeg",
            "assets/achievements/project-presentation/02.jpeg"
        ],

        current: 0

    }

};



/* =====================================================
   PROJECT — SET IMAGE
===================================================== */


function setImage(project, index) {

    const gallery = galleries[project];

    gallery.current = index;


    const mainImage =
        document.getElementById(`${project}-main`);


    mainImage.src =
        gallery.images[index];


    updateProjectThumbnails(project);

}



/* =====================================================
   PROJECT — NEXT
===================================================== */


function nextImage(project) {

    const gallery = galleries[project];


    gallery.current++;


    if (
        gallery.current >=
        gallery.images.length
    ) {

        gallery.current = 0;

    }


    setImage(
        project,
        gallery.current
    );

}



/* =====================================================
   PROJECT — PREVIOUS
===================================================== */


function previousImage(project) {

    const gallery = galleries[project];


    gallery.current--;


    if (gallery.current < 0) {

        gallery.current =
            gallery.images.length - 1;

    }


    setImage(
        project,
        gallery.current
    );

}



/* =====================================================
   PROJECT — UPDATE THUMBNAILS
===================================================== */


function updateProjectThumbnails(project) {

    const gallery =
        galleries[project];


    const mainImage =
        document.getElementById(
            `${project}-main`
        );


    const container =
        mainImage
            .closest(".project-gallery")
            .querySelector(
                ".gallery-thumbnails"
            );


    const thumbnails =
        container.querySelectorAll(
            ".thumbnail"
        );


    thumbnails.forEach(
        (thumbnail, index) => {

            thumbnail.classList.remove(
                "active"
            );


            if (
                index ===
                gallery.current
            ) {

                thumbnail.classList.add(
                    "active"
                );

            }

        }
    );

}



/* =====================================================
   ACHIEVEMENT — SET IMAGE
===================================================== */


function setAchievement(
    project,
    index
) {

    const gallery =
        achievementGalleries[project];


    gallery.current = index;


    const mainImage =
        document.getElementById(
            `${project}-main`
        );


    mainImage.src =
        gallery.images[index];


    updateAchievementThumbnails(
        project
    );

}



/* =====================================================
   ACHIEVEMENT — NEXT
===================================================== */


function nextAchievement(project) {

    const gallery =
        achievementGalleries[project];


    gallery.current++;


    if (
        gallery.current >=
        gallery.images.length
    ) {

        gallery.current = 0;

    }


    setAchievement(
        project,
        gallery.current
    );

}



/* =====================================================
   ACHIEVEMENT — PREVIOUS
===================================================== */


function previousAchievement(project) {

    const gallery =
        achievementGalleries[project];


    gallery.current--;


    if (
        gallery.current < 0
    ) {

        gallery.current =
            gallery.images.length - 1;

    }


    setAchievement(
        project,
        gallery.current
    );

}



/* =====================================================
   ACHIEVEMENT — UPDATE THUMBNAILS
===================================================== */


function updateAchievementThumbnails(
    project
) {

    const gallery =
        achievementGalleries[project];


    const mainImage =
        document.getElementById(
            `${project}-main`
        );


    const article =
        mainImage.closest(
            "article"
        );


    const container =
        article.querySelector(
            ".achievement-thumbnails"
        );


    const thumbnails =
        container.querySelectorAll(
            ".achievement-thumbnail"
        );


    thumbnails.forEach(
        (thumbnail, index) => {

            thumbnail.classList.remove(
                "active"
            );


            if (
                index ===
                gallery.current
            ) {

                thumbnail.classList.add(
                    "active"
                );

            }

        }
    );

}