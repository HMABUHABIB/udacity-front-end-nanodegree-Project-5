const places = ["	Hong Kong	",
 "	Bangkok	",
 "	London	",
 "	Macau	",
 "	Singapore	",
 "	Paris	",
 "	Dubai	",
 "	New York City	",
 "	Kuala Lumpur	",
 "	Istanbul	",
 "	Delhi	",
 "	Antalya	",
 "	Shenzhen	",
 "	Mumbai	",
 "	Phuket	",
 "	Rome	",
 "	Tokyo	",
 "	Pattaya	",
 "	Taipei	",
 "	Mecca	",
 "	Guangzhou	",
 "	Prague	",
 "	Medina	",
 "	Seoul	",
 "	Amsterdam	",
 "	Agra	",
 "	Miami	",
 "	Osaka	",
 "	Las Vegas	",
 "	Shanghai	",
 "	Ho Chi Minh City	",
 "	Denpasar	",
 "	Barcelona	",
 "	Los Angeles	",
 "	Milan	",
 "	Chennai	",
 "	Vienna	",
 "	Johor Bahru	",
 "	Jaipur	",
 "	Cancún	",
 "	Berlin	",
 "	Cairo	",
 "	Athens	",
 "	Orlando	",
 "	Moscow	",
 "	Venice	",
 "	Madrid	",
 "	Ha Long	",
 "	Riyadh	",
 "	Dublin	",
 "	Florence	",
 "	Hanoi	",
 "	Toronto	",
 "	Johannesburg	",
 "	Sydney	",
 "	Munich	",
 "	Jakarta	",
 "	Beijing	",
 "	Saint Petersburg	",
 "	Brussels	",
 "	Bielefeld	",
 "	Budapest	",
 "	Lisbon	",
 "	Dammam	",
 "	Penang Island	",
 "	Heraklion	",
 "	Kyoto	",
 "	Zhuhai	",
 "	Vancouver	",
 "	Chiang Mai	",
 "	Copenhagen	",
 "	San Francisco	",
 "	Melbourne	",
 "	Warsaw	",
 "	Marrakesh	",
 "	Kolkata	",
 "	Cebu City	",
 "	Auckland	",
 "	Guilin	",
 "	Honolulu	",
 "	Hurghada	",
 "	Kraków	",
 "	Muğla	",
 "	Buenos Aires	",
 "	Chiba	",
 "	Frankfurt am Main	",
 "	Stockholm	",
 "	Lima	",
 "	Da Nang	",
 "	Batam	",
 "	Nice	",
 "	Fukuoka	",
 "	Abu Dhabi	",
 "	Jeju	",
 "	Porto	",
 "	Rhodes	",
 "	Rio de Janeiro	",
 "	Krabi	",
 "	Bangalore	",
 "	Mexico	",
 "	Dominican Republic	",
 "	Brazil	",
 "	Switzerland	",
 "	Canada	",
 "	United States	",
 "	United States	",
 "	Germany	",
 "	United States	",
 "	China	",
 "	United Kingdom	",
 "	United States	",
 "	Iran	",
 "	United States	",
 "	Germany	",
 "	South Africa	",
 "	Philippines	",
 "	Colombia	",
 "	China	",
 "	Lebanon	",
 "	Switzerland	",
 "	Sri Lanka	",
 "	China	",
 "	Romania	",
 "	Morocco	",
 "	United States	",
 "	Bulgaria	",
 "	China	",
 "	Uruguay	",
 "	Jordan	",
 "	China	",
 "	India	",
 "	South Africa	",
 "	United States	",
 "	Ghana	",
 "	Ecuador	",
 "	China	",
 "	China	",
 "	United States	",]
function nameOfRandomePlace() {
 return places[getRandomInt(places.length)]
}

function getRandomInt(max) {
 return Math.floor(Math.random() * Math.floor(max));
}

export { nameOfRandomePlace }