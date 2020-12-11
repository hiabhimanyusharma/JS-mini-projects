const dogs = [
    {
        img : "/images/dog1.jpg",
        name : "Bunny",
        breed : "Labrador",
        text : "The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. The head is wide, the eyes glimmer with kindliness, and the thick, tapering “otter tail” seems to be forever signaling the breed’s innate eagerness.Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don’t mistake his easygoing personality for low energy: The Lab is an enthusiastic athlete that requires lots of exercise, like swimming and marathon games of fetch, to keep physically and mentally fit."
    },
    {
        img : "/images/dog2.jpg",
        name : "Tommy",
        breed : "Siberian Husky",
        text : "The graceful, medium-sized Siberian Husky’s almond-shaped eyes can be either brown or blue—and sometimes one of each—and convey a keen but amiable and even mischievous expression. Quick and nimble-footed, Siberians are known for their powerful but seemingly effortless gait. Tipping the scales at no more than 60 pounds, they are noticeably smaller and lighter than their burly cousin, the Alaskan Malamute. In fact, breeders and fanciers prefer the moniker Siberians over huskies, as the latter suggests a bigger, brawnier dog than what is the standard for the breed.As born pack dogs, Siberians enjoy family life and get on well with other dogs; their innate friendliness render them indifferent watchdogs. This breed is also energetic and can’t resist chasing small animals, so secure running room is a must. An attractive feature of the breed: Siberians are naturally clean, with little doggy odor."
    },
    {
        img : "/images/dog3.jpg",
        name : "Max",
        breed : "Pug",
        text : "The Pug’s motto is the Latin phrase “multum in parvo” (a lot in a little)—an apt description of this small but muscular breed. They come in three colors: silver or apricot-fawn with a black face mask, or all black. The large round head, the big, sparkling eyes, and the wrinkled brow give Pugs a range of human-like expressions—surprise, happiness, curiosity—that have delighted owners for centuries.Pug owners say their breed is the ideal house dog. Pugs are happy in the city or country, with kids or old folks, as an only pet or in a pack. They enjoy their food, and care must be taken to keep them trim. They do best in moderate climates—not too hot, not too cold—but, with proper care, Pugs can be their adorable selves anywhere."
    },
    {
        img : "/images/dog4.jpg",
        name : "Beerus",
        breed : "German Shepherd",
        text : "German Shepherd Dogs can stand as high as 26 inches at the shoulder and, when viewed in outline, presents a picture of smooth, graceful curves rather than angles. The natural gait is a free-and-easy trot, but they can turn it up a notch or two and reach great speeds.There are many reasons why German Shepherds stand in the front rank of canine royalty, but experts say their defining attribute is character: loyalty, courage, confidence, the ability to learn commands for many tasks, and the willingness to put their life on the line in defense of loved ones. German Shepherds will be gentle family pets and steadfast guardians, but, the breed standard says, there’s a “certain aloofness that does not lend itself to immediate and indiscriminate friendships.”"
    }
];

const im = document.getElementById("img");
const name = document.getElementById("name");
const breed = document.getElementById("breed");
const text = document.getElementById("text");

const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let index = 1;

function doSome(index) {
    index = Math.abs(index);
    const item = dogs[index%4];
    im.src = item.img;
    name.textContent = item.name;
    breed.textContent = item.breed;
    text.textContent = item.text;
}

window.addEventListener("DOMContentLoaded" , doSome(index));

next.addEventListener("click",function() {
    index++;
    doSome(index);
});

prev.addEventListener("click",function() {
    index--;
    doSome(index);
});