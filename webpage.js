

const track_p = document.getElementById('patent_track');
const prev_p  = document.getElementById('patent_prev');
const next_p  = document.getElementById('patent_next');
const cards_p = track_p.querySelectorAll('.patent_card');
var current_p=0;

next_p.addEventListener('click', () => {
    if (current_p < cards_p.length - 1) {
        current_p++;
    }
    else{
        current_p = 0;
    }

        cards_p.forEach(card => {
            card.style.transform = `translateX(-${current_p * 100}%)`;
        });

});

prev_p.addEventListener('click', () => {
    if (current_p > 0) {
        current_p--;}
    else {current_p = cards_p.length - 1;}
        cards_p.forEach(card => {
            card.style.transform = `translateX(-${current_p * 100}%)`;
        });

});




const track_a = document.getElementById('achievement_track');
const prev_a  = document.getElementById('achievements_prev');
const next_a  = document.getElementById('achievement_next');
const cards_a = track_a.querySelectorAll('.achievements_card');
var current_a=0;
const dots_a  = document.querySelectorAll('.dot');
var current_dots_a  = 0;

next_a.addEventListener('click', () => {
    if (current_a < cards_a.length - 1) {
        current_a++;
    }
    else{
        current_a = 0;
    }

    cards_a.forEach(card => {
        card.style.transform = `translateX(-${current_a * 100}%)`;
    });
    updateDots();
});

prev_a.addEventListener('click', () => {
    if (current_a> 0) {
        current_a--;}
    else {current_a = cards_a.length - 1;}
    cards_a.forEach(card => {
        card.style.transform = `translateX(-${current_a* 100}%)`;
    });
    updateDots();
});

function updateDots() {
    dots_a.forEach(dot => dot.classList.remove('active'));
    dots_a[current_a].classList.add('active');
}

dots_a.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        current_a = index;
        cards_a.forEach(card => {
            card.style.transform = `translateX(-${current_a * 100}%)`;
        });

        updateDots();
    });
});




const track_e = document.getElementById('e_track');
const text_e = document.querySelectorAll(".events_text");
const photo_e = document.querySelectorAll(".events_photo");
const e_desc = document.querySelectorAll(".e_d_text");
const e_cards = document.querySelectorAll(".e_card");
var active_cards = track_e.querySelectorAll('.e_card.active');
const e_next = document.getElementById('e_right');
const e_prev = document.getElementById('e_left');
let current_e = 0;

text_e.forEach(text => {
    text.addEventListener('click', () => {
        text_e.forEach(text_ => {text_.classList.remove('active');});
        photo_e.forEach(photo => {photo.classList.remove('active');});
        e_desc.forEach(des => {des.classList.remove('active');});
        e_cards.forEach(card => {card.classList.remove('active');});
        current_e = 0;
        const all_cards = document.querySelectorAll('.e_card');
        all_cards.forEach(card => {
            card.style.transform = `translateX(0%)`; // Snap all cards back to the start
        });
        let targetClass = "";
        text.classList.forEach(className => {
            if (className !== "events_text" && className !== "active") {
                targetClass = className;
            }
        });

        const matchingPhotos = document.querySelectorAll(`.events_photo.${targetClass}`);
        const matching_des = document.querySelector(`.e_d_text.${targetClass}`);
        if (matchingPhotos) {
            matchingPhotos.forEach(photo => {photo.classList.add('active');
                photo.closest('.e_card').classList.add('active');})
        }
        if(matching_des) {
            matching_des.classList.add('active');
        }
        text.classList.add('active');

        active_cards = track_e.querySelectorAll('.e_card.active');
        text.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    })
})



e_next.addEventListener('click', () => {

       if (current_e < active_cards.length - 1) {
        current_e++;
    } else {
        current_e = 0;
    }

    active_cards.forEach(card => {
        card.style.transform = `translateX(-${current_e * 100}%)`;
    });
    updateDots_e();
});

e_prev.addEventListener('click', () => {

    if (current_e > 0) {
        current_e--;
    } else {
        current_e = active_cards.length - 1;
    }
    active_cards.forEach(card => {
        card.style.transform = `translateX(-${current_e * 100}%)`;
    });
    updateDots_e();
});

const dots_e=document.querySelectorAll('.e_dot');

function updateDots_e() {
    dots_e.forEach(dot => dot.classList.remove('active'));
    dots_e[current_e].classList.add('active');
}

dots_e.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        current_e = index;
        active_cards.forEach(card => {
            card.style.transform = `translateX(-${current_e * 100}%)`;
        });

        updateDots_e();
    });
});


const track_m = document.getElementById('m_track');
const prev_m = document.getElementById('m_prev');
const next_m = document.getElementById('m_next');
var current_m =0;
const cards_m = track_m.querySelectorAll('.milestones_card');
const year_m = document.querySelectorAll('.year_container');

next_m.addEventListener('click', () => {
    if (current_m < cards_m.length - 1) {
        current_m++;
    }
    else{
        current_m = 0;
    }

    cards_m.forEach(card => {
        card.style.transform = `translateX(-${current_m * 100}%)`;
    });
    update_year();
});

prev_m.addEventListener('click', () => {
    if (current_m > 0) {
        current_m--;}
    else {current_m = cards_m.length - 1;}
    cards_m.forEach(card => {
        card.style.transform = `translateX(-${current_m * 100}%)`;
    });
    update_year();

});

function update_year() {
    year_m.forEach((year,index) => {
        year.classList.remove('active');
    })
    year_m[current_m].classList.add('active');
}

year_m.forEach((year,index) => {
    year.addEventListener('click', () => {
        current_m = index;
        cards_m.forEach(card => {
            card.style.transform = `translateX(-${current_m * 100}%)`;
        });
        update_year();
    })
})

