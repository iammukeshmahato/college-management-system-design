(function ($) {

    var form = $("#signup-form");
    form.validate({
        errorPlacement: function errorPlacement(error, element) {
            element.before(error);
        },
        rules: {
            username: {
                required: true,
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            email: {
                email: 'Not a valid email address <i class="zmdi zmdi-info"></i>'
            }
        },
        onfocusout: function (element) {
            $(element).valid();
        },
    });
    form.steps({
        headerTag: "h3",
        bodyTag: "fieldset",
        transitionEffect: "slideLeft",
        labels: {
            previous: 'Previous',
            next: 'Next',
            finish: 'Submit',
            current: ''
        },
        titleTemplate: '<div class="title"><span class="number">#index#</span>#title#</div>',
        onStepChanging: function (event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            // console.log(form.steps("getCurrentIndex"));
            return form.valid();
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            console.log(getCurrentIndex);
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            alert('Sumited');
        },
        // onInit : function (event, currentIndex) {
        //     event.append('demo');
        // }
    });

    jQuery.extend(jQuery.validator.messages, {
        required: "",
        remote: "",
        url: "",
        date: "",
        dateISO: "",
        number: "",
        digits: "",
        creditcard: "",
        equalTo: ""
    });


    $.dobPicker({
        daySelector: '#expiry_date',
        monthSelector: '#expiry_month',
        yearSelector: '#expiry_year',
        dayDefault: 'DD',
        yearDefault: 'YYYY',
        minimumAge: 0,
        maximumAge: 120
    });

    $('#password').pwstrength();

    $('#button').click(function () {
        $("input[type='file']").trigger('click');
    })

    $("input[type='file']").change(function () {
        $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
    })

})(jQuery);


function fun() {

    // console.log(document.getElementById("province").value);
    var a = document.getElementById('province').value;

    const provinces = ['Province1', "Province2", "Province3", "Province4", "Province5", "Province6", "Province7"];
    // const districts = [
    //     ["1","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    //     ["2","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    //     ["3","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    //     ["4","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    //     ["5","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    //     ["6","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],
    //     ["7","Dhankuta","Illam","Jhapa","Khotang","Morang","Okhaldhunga","Panchthar","Sankhuwasabha","Solukhumbu","Sunsari","Taplejung","Terhathum","Udayapur"],

    // ];

    const districts = [
        ["Taplejung", "Sankhuwasabha", "Solukhumbu", "Okhaldhunga", "Khotang", "Bhojpur", "Dhankuta", "Terhathum", "Panchthar", "Ilam", "Jhapa"],
        ["Saptari", "Siraha", "Dhanusa", "Mahottari", "Sarlahi", "Rautahat", "Bara", "Parsa"],
        ["Dolakha", "Sindupalchok", "Rasuwa", "Dhading", "Nuwakot", "Kathmandu", "Bhaktapur", "Lalitpur", "kaverepalanchok", "Ramechhap", "Sindhuli", "Makwanpur", "Chitawan"],
        ["Gorkha", "Manang", "Mustang", "Myagdi", " kaski", "Lamjung", "Tanahu", "Nawalparasi East"],
        ["Rukum East", "Rolpa", "Pyuthan", "Gulmi", "Arghakhanchi", "Palpa", "Nawalparasi West", "Rupandehi", "Kapilbastu", "Dang", "Banke", "Bardiya"],
        ["Dolpa", "Mugu", "Humla", "Jumla", "Kalikot", "Dailekh", "Jajarkot", "Rukum West", "Salyan", "Surkhet"],
        ["Bajura", "Bajhang", "Darchula", "Baitadi", "Dadeldhura", "Doti", "Achham", "Kailali", "Kanchanpur"]
    ]

    provinces.forEach((province, i) => {
        if (a == province) {
            let str = districts[i].reduce((acc, curr) => {
                return acc + `<option value='${curr}${i}'> ${curr} </option>`;
            }, "<option value=''>Select District</option>");
            document.getElementById('output').innerHTML = str;
            // document.getElementById('output').innerHTML = `<select onchange='selectDistrict(${i})'>` + str + "</select>";
        }
    });

}

function selectDistrict() {

    const districts = [
        ["Taplejung", "Sankhuwasabha", "Solukhumbu", "Okhaldhunga", "Khotang", "Bhojpur", "Dhankuta", "Terhathum", "Panchthar", "Ilam", "Jhapa"],
        ["Saptari", "Siraha", "Dhanusa", "Mahottari", "Sarlahi", "Rautahat", "Bara", "Parsa"],
        ["Dolakha", "Sindupalchok", "Rasuwa", "Dhading", "Nuwakot", "Kathmandu", "Bhaktapur", "Lalitpur", "kaverepalanchok", "Ramechhap", "Sindhuli", "Makwanpur", "Chitawan"],
        ["Gorkha", "Manang", "Mustang", "Myagdi", " kaski", "Lamjung", "Tanahu", "Nawalparasi East"],
        ["Rukum East", "Rolpa", "Pyuthan", "Gulmi", "Arghakhanchi", "Palpa", "Nawalparasi West", "Rupandehi", "Kapilbastu", "Dang", "Banke", "Bardiya"],
        ["Dolpa", "Mugu", "Humla", "Jumla", "Kalikot", "Dailekh", "Jajarkot", "Rukum West", "Salyan", "Surkhet"],
        ["Bajura", "Bajhang", "Darchula", "Baitadi", "Dadeldhura", "Doti", "Achham", "Kailali", "Kanchanpur"]
    ]

    const municipalities = [
        [
            ["Phaktanlung", "Mikwakhola", "Meringden", "Maiwakhola", "Aatharai Trebeni", "Phungling", "Sirijanga", "Sidingba"],
            ["Bhotkhola", "Makalu", "Silichong", "Chichila", "Sabhapokhari", "Khandabari", "Panchakhapan", "Madi", "Dhaemadevi"],
            ["Khumbu Pasanglhamu", "Mahakulung", "Sotang", "Dhudhakoshi", "Dhudha Koushika", "Necha Salyan", "Solu Dhudhakunda", "Likhu Pike"],
            ["Chishankhu Gadhi", "Siddhicharan", "Molung", "Khijin Demba", "Likhu", "Champadevi", "Sunkoshi", "Manebhanjyang"],
            ["Keplasgadhi", "Aiselukharka", "Lamidanda", "Halesi Tuwachung", "Rupakot Majhuwagadhi", "Sakela", "Diprung", "Khotehang", "Baraha Pokhari"],
            ["Shadananda", "Salpa Silichho", "Tyamke Maiyum", "Bhojpur", "Arun", "Pauwa Dunma", "Ramprasad Rai", "Hatuwagadhi", "Aamchowk"],
            ["Mahalaxmi", "Pakhribas", "Chhathar Jorpati", "Dhankuta", "Khalsa Chhintabng Sahidbhumi", "Sangurigadhi", "Chaubise"],
            ["Aatharai", "Phedap", "Menchhayayem", "Myanglung", "Laligurans", "Chhathar"],
            ["Yangbarak", "Hilihan", "Falelung", "Phidim", "falgunanda", "Kummayak", "Tumbewa", "Miklajung"],
            ["Mai Jogmai", "Sandakpur", "Ilam", "Deumai", "Fakfokathum", "Mangsebung", "Chulachuli", "Mai", "Suryadaya", "Rong"],
            ["Mechinagar", "Buddhashanti", "Arjundhara", "Kankai", "Shivsatashi", "Kamal", "Damak", "Gauradaha", "Gauriganj", "Jhapa", "Barhadashi", "Birtamod", "Haldibari", "Bhadrapur", "Kachankawal"]
        ],

        [
            ["Saptakoshi", "Kanchanrup", "Agnisair Krishna Sabaran", "Rupani", "Shambhunath", "Khadak", "Surunga", "Balan Bihul", "Bodebarasain", "Dakneshwori", "Belhi Chapena", "Bisnupur", "Rajbiraj", "Mahadewa", "Tirahut", "Hanumannagar Kankalini", "Tilathi koiladi", "Chhinnamasta"],
            ["Lahan", "Dhangadhimai", "Golbazar", "Mirchiya", "Karjahna", "Kalyanpur", "Naraha", "Bishnupur", "Arnama", "Laxmipur Patari", "Sakhuwa Nankarkatti", "Bhagawanpur", "Nawarajpur", "Aerahi", "Siraha"],
            ["Ganeshman Charnath", "Dhanushadham", "Mithila", "Bateshwor", "Chhireshwornath", "Laxminiya", "Mithila Bihari", "Hansapur", "Sabaila", "Shahidnagar", "Kamala", "Janak Nandini", "Bideha", "Aurahi", "Janakpur", "Dhanauji", "Nagarain", "MUkhiyapatti Musaharimiya"],
            ["Bardibas", "Gaushala", "Sonama", "Aurahi", "Bhangaha", "Loharpatti", "Balawa", "Ram Gopalpur", "Samsi", "Manara Shisawa", "Ekadara", "Mahottari", "Pipara", "Matihani", "Jaleshwor"],
            ["Lalabandi", "Hariwon", "Bagmati", "Barahathawa", "Haripur", "Parsa", "Brahmapuri", "Chandranagar", "Kabilashi", "Chakraghatta", "Basbariya", "Dhanakaul", "Ramnagar", "Balara", "Godaita", "Bishnu", "Kaudena", "Malangwa"],
            ["Chandrapur", "Gujara", "Phatuwa Bijayapur", "Katahariya", "Brindaban", "Gadhimai", "Madhav Narayan", "Garuda", "Dewahi Gonahi", "Maulapur", "Boudhimai", "Paroha", "Rajpur", "Yamunamai", "Dugra Bhagawati", "Rajdevi", "Gaur", "Ishanath"],
            ["Nijagadh", "Kolhabi", "jitpur Simara", "Parawanipur", "Prasauni", "Bishrampur", "Pheta", "kalaiya", "Karaiyamai", "Baragadhi", "Aadarsha Kotwal", "Simroungadh", "Pacharauta", "Mahagadhimai", "Devatal", "Subarna"],
            ["Thori", "Jirabhawani", "Jagarnathpur", "Paterwa Sugauli", "Sakhuwa Prasauni", "Birgunj", "Bahudarmai", "Pokhariya", "Kalikamai", "Dhobini", "Chhipaharmai", "Pakaha Mainpur", "Bindabasini"]
        ],

        [
            ["Gaurishankar", "Bigu", "Kalinchowk", "Baitedhar", "Jiri", "Tamakoshi", "Melung", "Shailung", "Bhimeshower"],
            ["Bhotekoshi", "Jungal", "Panchpokhari Thangpal", " Helambu", "Melanchi", "Indrawoit", "Choutara sangachowkgadhi", "Balephi", " Bahrabise", "Tripurasundari", " Lisankhu pakhar", "Sunkhosi"],
            ["Gosaikunda", "Parbatikunda", "Uttargaya", "Kalika", "Naukunda"],
            ["Rubi Valley", "Khaniyabas", "Ganga jamuna", "Tripurasundari", "Netrawati", "Nilkhantha", "Jwalamukhi", "Siddalek", "Benighat Rorang", "Gajuri", "Galchhi", "Thakre", "Dhunibenshi"],
            ["Dupcheshwor", "Tadi", "Suryaghadi", "Kispang", "Meghang", "Tarakeshwor", "Belkotgadhi", "Linkhu", "Panchakanya", " Shivapuri", "Kakani"],
            ["Shankharapur", "Kageshwori Manahara", "Gokarneshwor", "Budhanilkhantha", "Tokha", "Tarakeshwor", "Nagarjun", "Kathmandu Metropolitian City", "Kirtipur", " Chandragiri", " Dakshinkali"],
            ["Changunarayan", "Bhaktapur", "Madhyapur thimi", "Suryabinayak"],
            [" Mahalaxmi", "Lalitpur Metropolitian City", " Godawari", "konjyosom", "Mahankal", "Bagmati"],
            [" Chauri Deurali", " Bhumlu", " Mandan Deupur", "Banepa", "Dhulikhel", "Panchkhal", "Temal", "Namobuddha", "Panauti", "Bethanchowk", "Roshi", " Mahabharat", "Khanikhola"],
            ["Umakunda", "Gokulganga", "Likhu", "Ramechhap", "Manthali", "Khandadevi", "Doramba", "Sunapati"],
            ["Dudhouli", "Phikkal", "Tinpatan", "Golanjor", "Kamalamai", "Sunkhosi", "Ghyanglekha", "Marin", "Hariharpurgaghi"],
            ["Indrasarowar", "Thaha", "Kailash", "Raksirang", "Manahari", "Hetauda Sub-Metropolitian City", "Bhimphedi", "Makawanpurgadi", "Bakaiya", "Bagmati"],
            ["Rapti", "Kalika", "Ichchha Kamana", "Bharatpur Metropolitian City", "Ratnanagar", " Khairahani", "Madi"]
        ],

        [
            ["Chumanubri", "Ajirkot", "Sulikot", " Dharche", "Aarughat", "Bhimsen", "Siranchowk", "Palungtar", "Gorkha", "ShahidLakhan", "Gandaki"],
            ["Naraphu", "Neshang", "Chame", "Nashong",],
            ["Dalome", "Gharpalhong", "Bahragun muktikdhetra", "Lomanthang", "Thasang"],
            ["Annapurna", "Raghuganga", "Dhawalagiri", "Malika", "Mangala", "Beni"],
            ["Madi", "Machhapuchchhre", "Annnapurna", "Pokhara Lekhnath Metropolitian City ", "Rupa"],
            ["Dordi", "Marshyangdi", "Kwhola sothar", "Madhya Napal", "Bansi shahar", "Sundarbazar", "Rainas", "Dudhapokhari"],
            ["Bhanu", "Byas", "Myagde", "Shuklagandaki", "Bhimad", "Ghiring", "Rhishing", "Devghat", "Bandipur", "Aanbu Khaireni"],
            ["Gaidakot", "Bulingtar", "Bungdikali", "Hupsekot", "Devchuli", "Kawasoti", "Madhya Bindu", "Binayi Tribeni"],
            ["Putalibazar", "Phedikhola", " Aandhikhola", "Arjun Choupari", "Bhirkot", " Biruwa", "Harinas", "Chapakot", "Walling", "Galyang", "Kaligandaki"],
            ["Modi", "jaljala", "Kushma", "Phalebas", "Mahashila", "Bihadi", "Paiyu"],
            ["Baglung", "Kathekhola", "Tarakhola", "Tamankhola", "Dhorpatan", "Nisikhola", "Badigad", "Galkot", "Bareng", "Jaimuni"]
        ],

        [
            ["Putha Uttanganaga", "Sisne", "Bhoome"],
            ["Sunchhahari", "Thawang", "Duikholi", "Sukidaha", "Madi", "Tribeni", "Rolpa", "Runtigadhi", "Lungari"],
            ["Gaumukhi", "Naubahini", "Jhimaruk", "Pyuthan", "Swargadwari", "Mandevi", "Mallarani", "Aairawati", "Sarumarani",],
            ["Kali Gandaki", "Satyawoti", "Chandrakot", "Musikot", "Isma", "Malika", "Madane", "Dhurkot", "Fesunga", "Gulmi Durbar", "Chhatrakot", "Ruru"],
            ["Chhatredev", "Malarani", "Bhumikastan", "Sandhikharka", "Panini", "Shitaganga"],
            ["rampur", "Purbakhola", "Rambha", "Baganaskali", "Tansen", "Ribdikot", "Raindervi Chahara", "Tinau", "Mathagadhi", "Nisdi"],
            ["Bardaghat", "Sunawal", "Ramgram", "Palhinandan", "Sarawal", "Pratapapur", "susta"],
            ["Devdaha", "Butwal", "Sainamaina", "Kanchan", "Gaidahawa", "Suddhodhan", "Siyari", "Tilottama", "Om Satiya", "Rohini", "Siddharthanagar", "Mayadevi", "Limbini Sanskritik", "Kotahimai", "Marchawari"],
            ["Banganga", "Buddhabhumi", "Shivaraj", "Bijaynanagar", "Krishnanagar", "Maharajganj", "Kapilbastu", "Yasodhara", "Mayadevi", "Shuddhodhan"],
            ["Bangalachuli", "Ghorahi", "Tulsipur", "Shantinagar", "Babai", "Dangisharan", "Lamahi", "Rapti", "Gadhawa", "Rajpur"],
            ["Rapti Sonari", "Kohalpur", "Baijanath", "Khajura", "Janki", "Nepalganj", "Duduwa", "Narainapur"],
            ["Bansgadhi", "Barbardiya", "Thakurbaba", "Geruwa", "Rajpur", "Madhuwan", "Gulariya", "Badhaiyatal"],
        ],

        [
            ["Dolpo Buddha", "Shey Foksundo", "Jagadulla", "Mudkechula", "Tripurasundari", "Thulibheri", "Kaike", "Chharka Tansong",],
            ["Mugumakarmarog", "Chhayanath Rara", "Soru", "Khatyad"],
            ["Chankheli", "Kharpunath", "Simkot", "Namkha", "Sarkegad", "Adanchuli", "Tanjakot"],
            ["Patarasi", "Kanaka Sundari", "Sinja", "Chandannath", "Guthichaur", "Tatopani", "Tila", "Hima"],
            ["Patala", "Pachal Jharana", "Raskot", "Sanni Tribeni", "Naraharinath", "Khandachakra", "Tilagupha", "Mahawai", "Kalika"],
            ["Naumule", "Mahabu", "Bhairabi", "Thantikandh", "Aathbis", "Chamunda Bindrasaini", "Dullu", "Narayan", "Bhagawatimai", "Dungeshwor", "Gurans"],
            ["Barekot", "Kuse", "Junichande", "Chhedagad", "Shivalaya", "Bheri Malika", "Tribeni Nalagad"],
            ["Aathabisakot", "Sanibheri", "Banphikot", "Musikot", "Tribeni", "Chaurjahari"],
            ["Darma", "Kumakh Malika", "Banagad Kupinde", "Dhorchaur", "Bagachaur", "Chhatreshwori", "Sharada", "Kalimati", "Tribeni", "Kapurkot"],
            ["Simta", "Chingad", "Lekabesi", "Gurbhakot", "Bheriganga", "Birendranagar", "Barahatal", "Panchapuri", "Chaukune"]
        ],

        [
            ["Himali", "Gaumul", "Budhinanda", "Swami Kartik", "Pandab Gufa", "Badimalika", "Chhededaha", "Budhiganga", "Tribeni"],
            ["Kanda", "Bungal", "Surma", "Talkot", "Masta", "Jayapritithbi", "Chhabis Pathibhara", "Durgathali", "Kedarsyun", "Bitthadchir", "Thalara", "Khaptad chhanna"],
            ["Byas", "Duhun", "Mahakali", "Naugad", "Apihimal", "Marma", "Shailyashikhar", "Malikarjun", "Lekam"],
            ["Dilasaini", "Dogada kedar", "Dasharathchand", "Pancheshwor", "Shivanath", "Melauli", "Patam", "Sigas"],
            ["Nawadugra", "Amargadhi", "Ajayameru", "Bhageshwor", "Parashuram", "Aalital", "Ganyapdhura"],
            ["Purbichuki", "Sayal", "Aadarsha", "Shikhar", "Dipayal Silgadhi", "K.I. Singh", "Bogtan", "Badi Kedar", "Jorayal"],
            ["Panchdebal Binayak", "Ramaroshan", "Mellekh", "Sanphebagar", "Chaurpati", "Mangalsen", "Bannigadhi Jayagadh", "Kamal Bazar", "Dhakari", "Turmakhand"],
            ["Mohanyal", "Chure", "Godawari", "Gauriganga", "Ghodaghodi", "Bardagoriya", "Laxmi Chuna", "Janki", "Joshipur", "Tikapur", "Bhajani", "kailkari", "Dhangadhi"],
            ["Krishnapur", "Shuklaphanta", "Bedkot", "Bhimdatta", "Mahakali", "Laljhadi", "Punarbas", "Belauri", "Beldandi"],
        ]

    ]

    let selectedDistrict = document.getElementById("output").value;
    let province = selectedDistrict.slice(-1);

    districts[province].forEach((elem, i) => {
        if (elem == selectedDistrict.slice(0, -1)) {
            let str = municipalities[province][i].reduce((acc, curr) => {
                return acc + `<option value='${curr}'> ${curr} </option>`;
            }, "<option value=''>Municipality</option>");
            document.getElementById('Municipality').innerHTML = str;
        }
    });
}
