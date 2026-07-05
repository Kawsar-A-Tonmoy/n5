const kanjiData =[
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "山", "romaji": "Yama", "meaningBangla": "পাহাড় / পর্বত", "meaningEnglish": "Mountain" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "川", "romaji": "Kawa", "meaningBangla": "নদী", "meaningEnglish": "River" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "田", "romaji": "Ta", "meaningBangla": "ধান ক্ষেত", "meaningEnglish": "Rice field" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "日", "romaji": "Hi", "meaningBangla": "দিন / সূর্য", "meaningEnglish": "Day / Sun" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "月", "romaji": "Tsuki", "meaningBangla": "চাঁদ / মাস", "meaningEnglish": "Moon / Month" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "火", "romaji": "Hi", "meaningBangla": "আগুন", "meaningEnglish": "Fire" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "水", "romaji": "Mizu", "meaningBangla": "পানি", "meaningEnglish": "Water" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "木", "romaji": "Ki", "meaningBangla": "গাছ", "meaningEnglish": "Tree" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "金", "romaji": "Kane", "meaningBangla": "সোনা / টাকা", "meaningEnglish": "Gold / Money" },
  { "lesson": 1, "lessonName": "Lesson 1: Kanji Introduction", "japanese": "土", "romaji": "Tsuchi", "meaningBangla": "মাটি / পৃথিবী", "meaningEnglish": "Earth / Soil" },



  
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "一", "romaji": "Ichi", "meaningBangla": "এক", "meaningEnglish": "One" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "ニ", "romaji": "Ni", "meaningBangla": "দুই", "meaningEnglish": "Two" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "三", "romaji": "San", "meaningBangla": "তিন", "meaningEnglish": "Three" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "四", "romaji": "Yon", "meaningBangla": "চার", "meaningEnglish": "Four" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "五", "romaji": "Go", "meaningBangla": "পাঁচ", "meaningEnglish": "Five" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "六", "romaji": "Roku", "meaningBangla": "ছয়", "meaningEnglish": "Six" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "七", "romaji": "Nana", "meaningBangla": "সাত", "meaningEnglish": "Seven" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "八", "romaji": "Hachi", "meaningBangla": "আট", "meaningEnglish": "Eight" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "九", "romaji": "Kyuu", "meaningBangla": "নয়", "meaningEnglish": "Nine" },
  { "lesson": 2, "lessonName": "Lesson 2: Kanji - Numbers", "japanese": "十", "romaji": "Juu", "meaningBangla": "দশ", "meaningEnglish": "Ten" },




  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "百", "romaji": "Hyaku", "meaningBangla": "শত / একশত", "meaningEnglish": "Hundred" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "千", "romaji": "Sen", "meaningBangla": "হাজার / এক হাজার", "meaningEnglish": "Thousand" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "万", "romaji": "Man", "meaningBangla": "দশ হাজার", "meaningEnglish": "Ten thousand" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "円", "romaji": "En", "meaningBangla": "ইয়েন", "meaningEnglish": "Yen" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "年", "romaji": "Nen", "meaningBangla": "বছর", "meaningEnglish": "Year" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "上", "romaji": "Ue", "meaningBangla": "উপরে / উপর", "meaningEnglish": "Above / Up" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "下", "romaji": "Shita", "meaningBangla": "নিচে", "meaningEnglish": "Below / Down" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "中", "romaji": "Naka", "meaningBangla": "মধ্যে", "meaningEnglish": "Middle / Inside" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "半", "romaji": "Han", "meaningBangla": "অর্ধেক", "meaningEnglish": "Half" },
  { "lesson": 3, "lessonName": "Lesson 3: Kanji - Large Numbers, Time & Spatial", "japanese": "分", "romaji": "Fun", "meaningBangla": "মিনিট / ভাগ করা", "meaningEnglish": "Minute / Divide" },




  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "人", "romaji": "Hito", "meaningBangla": "ব্যক্তি / মানুষ", "meaningEnglish": "Person" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "子", "romaji": "Ko", "meaningBangla": "শিশু", "meaningEnglish": "Child" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "女", "romaji": "Onna", "meaningBangla": "মহিলা", "meaningEnglish": "Woman" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "男", "romaji": "Otoko", "meaningBangla": "মানুষ (পুরুষ)", "meaningEnglish": "Man" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "目", "romaji": "Me", "meaningBangla": "চোখ", "meaningEnglish": "Eye" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "口", "romaji": "Kuchi", "meaningBangla": "মুখ", "meaningEnglish": "Mouth" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "耳", "romaji": "Mimi", "meaningBangla": "কান", "meaningEnglish": "Ear" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "手", "romaji": "Te", "meaningBangla": "হাত", "meaningEnglish": "Hand" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "足", "romaji": "Ashi", "meaningBangla": "পা", "meaningEnglish": "Leg / Foot" },
  { "lesson": 4, "lessonName": "Lesson 4: Kanji - People & Body Parts", "japanese": "力", "romaji": "Chikara", "meaningBangla": "শক্তি / ক্ষমতা", "meaningEnglish": "Power / Strength" },




  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "父", "romaji": "Chichi", "meaningBangla": "আমার বাবা", "meaningEnglish": "My father" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "母", "romaji": "Haha", "meaningBangla": "আমার মা", "meaningEnglish": "My mother" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "先", "romaji": "Saki", "meaningBangla": "আগে / সামনে", "meaningEnglish": "Ahead / Previous" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "生", "romaji": "Umareru", "meaningBangla": "জন্মগ্রহণ করা", "meaningEnglish": "To be born" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "学", "romaji": "Benkyousuru", "meaningBangla": "অধ্যয়ন করা", "meaningEnglish": "To study" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "校", "romaji": "Gakkou", "meaningBangla": "বিদ্যালয়", "meaningEnglish": "School" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "友", "romaji": "Tomodachi", "meaningBangla": "বন্ধু", "meaningEnglish": "Friend" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "本", "romaji": "Hon", "meaningBangla": "বই / মূল", "meaningEnglish": "Book / Origin" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "毎", "romaji": "Mai", "meaningBangla": "প্রতি", "meaningEnglish": "Every" },
  { "lesson": 5, "lessonName": "Lesson 5: Kanji - Family & Academic", "japanese": "何", "romaji": "Nani", "meaningBangla": "কি", "meaningEnglish": "What" },





  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "前", "romaji": "Mae", "meaningBangla": "সামনে / আগে", "meaningEnglish": "Front / Before" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "後", "romaji": "Ushiro / Ato", "meaningBangla": "পেছনে / পরে", "meaningEnglish": "Back / After" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "外", "romaji": "Soto", "meaningBangla": "বাইরে", "meaningEnglish": "Outside" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "左", "romaji": "Hidari", "meaningBangla": "বাম", "meaningEnglish": "Left" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "右", "romaji": "Migi", "meaningBangla": "ডান", "meaningEnglish": "Right" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "東", "romaji": "Higashi", "meaningBangla": "পূর্ব", "meaningEnglish": "East" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "西", "romaji": "Nishi", "meaningBangla": "পশ্চিম", "meaningEnglish": "West" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "南", "romaji": "Minami", "meaningBangla": "দক্ষিণ", "meaningEnglish": "South" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "北", "romaji": "Kita", "meaningBangla": "উত্তর", "meaningEnglish": "North" },
  { "lesson": 6, "lessonName": "Lesson 6: Kanji - Direction & Position", "japanese": "名", "romaji": "Namae", "meaningBangla": "নাম", "meaningEnglish": "Name" },



  
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "牛", "romaji": "Ushi", "meaningBangla": "গরু", "meaningEnglish": "Cow" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "馬", "romaji": "Uma", "meaningBangla": "ঘোড়া", "meaningEnglish": "Horse" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "魚", "romaji": "Sakana", "meaningBangla": "মাছ", "meaningEnglish": "Fish" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "貝", "romaji": "Kai", "meaningBangla": "শেলফিশ", "meaningEnglish": "Shellfish" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "雨", "romaji": "Ame", "meaningBangla": "বৃষ্টি", "meaningEnglish": "Rain" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "天", "romaji": "Ten", "meaningBangla": "স্বর্গ / আকাশ", "meaningEnglish": "Heaven / Sky" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "気", "romaji": "Ki", "meaningBangla": "আত্মা / অনুভূতি", "meaningEnglish": "Spirit / Feeling" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "車", "romaji": "Kuruma", "meaningBangla": "গাড়ী", "meaningEnglish": "Car" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "門", "romaji": "Mon", "meaningBangla": "দরজা / প্রবেশপথ", "meaningEnglish": "Gate" },
  { "lesson": 7, "lessonName": "Lesson 7: Kanji - Animals, Weather & Time", "japanese": "午", "romaji": "Go", "meaningBangla": "দুপুর", "meaningEnglish": "Noon" },



  
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "大", "romaji": "Ookii", "meaningBangla": "বিশাল / বড়", "meaningEnglish": "Big" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "小", "romaji": "Chiisai", "meaningBangla": "ছোট", "meaningEnglish": "Small" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "高", "romaji": "Takai", "meaningBangla": "উচ্চ / দামি", "meaningEnglish": "High / Expensive" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "安", "romaji": "Yasui", "meaningBangla": "সস্তা", "meaningEnglish": "Cheap" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "新", "romaji": "Atarashii", "meaningBangla": "নতুন", "meaningEnglish": "New" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "古", "romaji": "Furui", "meaningBangla": "পুরাতন", "meaningEnglish": "Old" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "長", "romaji": "Nagai", "meaningBangla": "দীর্ঘ / লম্বা", "meaningEnglish": "Long" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "多", "romaji": "Ooi", "meaningBangla": "অনেক", "meaningEnglish": "Many / Much" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "少", "romaji": "Sukunai", "meaningBangla": "কম", "meaningEnglish": "Few / Little" },
  { "lesson": 8, "lessonName": "Lesson 8: Kanji - Adjectives", "japanese": "早", "romaji": "Hayai", "meaningBangla": "তাড়াতাড়ি", "meaningEnglish": "Early / Fast" },



  
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "行", "romaji": "Iku", "meaningBangla": "যাওয়া", "meaningEnglish": "To go" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "来", "romaji": "Kuru", "meaningBangla": "আসা", "meaningEnglish": "To come" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "食", "romaji": "Taberu", "meaningBangla": "খাওয়া", "meaningEnglish": "To eat" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "見", "romaji": "Miru", "meaningBangla": "দেখা", "meaningEnglish": "To see" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "入", "romaji": "Hairu", "meaningBangla": "প্রবেশ করা", "meaningEnglish": "To enter" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "出", "romaji": "Deru", "meaningBangla": "বাইরে যাওয়া / বের হওয়া", "meaningEnglish": "To exit" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "立", "romaji": "Tatsu", "meaningBangla": "দাঁড়ানো", "meaningEnglish": "To stand" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "書", "romaji": "Kaku", "meaningBangla": "লেখা", "meaningEnglish": "To write" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "言", "romaji": "Iu", "meaningBangla": "বলা", "meaningEnglish": "To say" },
  { "lesson": 9, "lessonName": "Lesson 9: Kanji - Common Verbs", "japanese": "飲", "romaji": "Nomu", "meaningBangla": "পান করা", "meaningEnglish": "To drink" },




  
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "話", "romaji": "Hanasu", "meaningBangla": "বলা", "meaningEnglish": "To speak" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "読", "romaji": "Yomu", "meaningBangla": "পড়া", "meaningEnglish": "To read" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "語", "romaji": "Kotoba", "meaningBangla": "শব্দ / ভাষা", "meaningEnglish": "Word / Language" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "間", "romaji": "Aida", "meaningBangla": "মধ্যে", "meaningEnglish": "Between / Time" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "聞", "romaji": "Kiku", "meaningBangla": "শোনা", "meaningEnglish": "To hear / listen" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "買", "romaji": "Kau", "meaningBangla": "কেনা", "meaningEnglish": "To buy" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "休", "romaji": "Yasumu", "meaningBangla": "বিশ্রাম নেওয়া", "meaningEnglish": "To rest" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "時", "romaji": "Zikan / Toki", "meaningBangla": "সময়", "meaningEnglish": "Time" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "週", "romaji": "Shuu", "meaningBangla": "সপ্তাহ", "meaningEnglish": "Week" },
  { "lesson": 10, "lessonName": "Lesson 10: Kanji - Communication & Time", "japanese": "道", "romaji": "Michi", "meaningBangla": "রাস্তা", "meaningEnglish": "Road / Way" },






]
