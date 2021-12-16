function getBotResponse(input) {

    // Simple responses
    if (input == "hello") {
        return "Hello! How could I help you?";
    } else if (input == "bye") {
        return "Glad to help you. See you soon";
    } else if (input == "Thankyou") {
        return "Welcome.. Glad to help you";
    }

    //pre pregnancy
    else if (input == "How will I feel when I'm pregnant?") {
        return "Everyone is different, but hormones can cause lots of changes in your body and the way you feel. Some of us may have tender breasts, get tired easily or feel sick (at any time of the day, and not just in the morning). Even if you were planning on becoming pregnant, realising that you are can still come as a bit of a shock, so don’t worry if you feel up and down.";
    } else if (input == "What if I have any bleeding during my pregnancy? ") {
        return "If you experience any bleeding, tell your midwife straight away and get her advice.";
    } else if (input == input == "When should I arrange to see a midwife?"){
        return "You should make an appointment with a midwife as soon as possible after finding out that you’re pregnant, even if you're a mum already. Getting in early means your midwife can help plan the best care for you and your baby.";
    } else if (input == "Can I exercise when pregnant? "){
        return "Yes, you can! Staying active is good for you and your baby. It can help you control weight gain, improve fitness, reduce high blood pressure, improve sleep, and improve your mood.";
    } else if (input == "How much exercise should I do?"){
        return "Try and aim for about 150 minutes a week. But stop exercising if you feel it’s becoming uncomfortable for you. ";
    } else if (input == "Which exercises should I do during pregnancy?"){
        return "Any exercise performed correctly under proper guidance or under supervision of someone are always encouraged. Exercises like child pose, deep squats, Quadruped cat/cow, Perineal bulges, Perineal massage, Riding a stationary bicycle, walking and many more.. And yoga is the best practice";
    } else if (input == "Can I do squats while pregnant?"){
        return "Yes, you can. Squats are an excellent resistance exercise to maintain strength and range of motion in the hips, glutes, core, and pelvic floor muscles. When performed correctly, squats can help improve posture, and they have the potential to assist with the birthing process.";
    } else if (input == "What should I eat when pregnant?"){
        return "A good diet can help you feel so much better, from the inside out. Fllow the diet as per our website . and you're all good to go.";
    } else if (input == "Why should I be taking folic acid tablets?"){
        return "Folic acid is totally natural and is a really good supplement when you’re expecting. It’s important for helping your baby’s spine to develop, even in the very early stages of pregnancy. It’s best to take folic acid while you’re trying to get pregnant, and continue taking it throughout your pregnancy.";
    } else if (input == "Can I intake tea/coffee during pregnancy?"){
        return "It's better to not have much caffine during pregnancy as it could affect the birth weight of the baby. Having a cup is fine everyday.";
    } else if (input == "Can I drink alcohol while I'm pregnant?"){
        return "No, It's harmful for the baby. Take care";
    } else if (input == "What can I do if my back or hips are sore?"){
        return "As your baby grows inside you it puts a little bit more strain on your body, and that can lead to a sore back and hips in the final months of pregnancy. Doctors advise, that moving around as much as possible helps and, if you can, a bit of swimming and stretches (like yoga) can also help relieve aches and pains. But if you get really sore, speak with your midwife, as there might be extra support available to you.";
    } else if (input == "When will I start to feel the baby kicking? "){
        return "Most mums feel the first fidgets of their wee one – known as ‘quickening’ – between weeks 14 and 26 of their pregnancy, but it does vary. After those first little flurries, you’ll get to know your own baby’s pattern of movements. Remember, you can talk to your midwife about what to expect. And you’ll probably start to feel your bond with your baby growing as you get use to their movements.";
    }

    // post-pregnancy
    else if (input == "What are the common changes that occur after pregnancy?") {
        return "Symptoms can include insomnia, anxiety, rapid heart rate, fatigue, weight loss and irritability (one to four months after birth) or fatigue, weight gain, constipation, dry skin and depression (four to eight months after birth).";
    } else if (input == "What is postpartum?") {
        return "The postpartum period begins immediately after the birth of your child and extends for the next six weeks. During this time your body, including your hormone levels and uterine size, returns to pre-pregnancy conditions.";
    } else if (input == "How much rest will I need and when can I resume my normal activities at home?") {
        return "When you go home after delivery, try to get extra rest and avoid fatigue. However, with caring for and feeding a new baby, there is not much time to rest. If you had a normal delivery without any problems, you can resume most of your normal activities right away. You should still take it easy and avoid heavy lifting, vacuuming and a lot of stair climbing for the first couple of weeks. If you have had a Cesarean section, you will need to avoid heavy lifting for six weeks and you should not drive a car until you are confident you can hit the brake firmly and without hesitation (usually about two weeks) and are no longer taking narcotic medication.";
    } else if (input == "How long will I bleed after my delivery and when will my period return?") {
        return "menstrual bleeding after birth, normally will last between two and six weeks with it gradually tapering to a dark pink staining. Bleeding is rarely heavier than a heavy period. If you notice any large clots or heavier bleeding, you must visit a doctor. You may also notice a distinct smell; don’t be concerned unless you have other symptoms like elevated temperature or abdominal pain. You should use pads for the first six weeks, not tampons, so that you do not increase your risk of infection. If you’re bottle-feeding your baby, you may start having menstrual periods three to ten weeks after delivery. If you are breastfeeding, there is no specific time when your periods will start again. It may not happen until after the first six months of breastfeeding, but it could happen earlier. Some women do not get their period again until they stop breastfeeding.";
    } else if (input == "What can I use for pain relief?") {
        return "If you delivered the baby normally through the birth canal, pain in the area between your rectum and vagina is common. To relieve the pain and prevent infection, you can sit in a warm bath, put cold packs on the area, or put warm water on the area with a squirt bottle or sponge. It is also important to wipe yourself from the front to back after a bowel movement to prevent infection. If sitting is uncomfortable, you may want to buy a doughnut-shaped pillow at your local drugstore to help ease the pressure when sitting. For pain relief after a vaginal delivery or cesarean section, you may take ibuprofen along with any prescription pain medication you were given upon discharge.";
    } else if (input == "What problems after delivery should I report to my provider?") {
        return "In addition to heavy bleeding, visit doctor if you are experiencing burning with urination, increasing pain, temperature over 100.4°F, depression for more than 2 to 3 days, breast concerns or incisional redness or tenderness.";
    } else if (input == "What can you tell me about postpartum breast care?") {
        return "Breast milk usually comes in two to four days after delivery. This may make your breasts very large, hard and sore. This will get better once you start a breastfeeding routine. If you are not breastfeeding, your breasts may become large and painful while you are waiting for your milk to dry out and you may benefit from wearing a well-fitting support bra 24 hours per day, putting ice packs on your breasts and avoiding any nipple stimulation.";
    } else if (input == "How do I deal with sore nipples?") {
        return "may be relieved with ice packs and regular feeding from both breasts alternating feeding positions. Avoid prolonged feeding sessions and ensure a good latch. Keep your nipples as dry as possible between feedings. Apply cool steeped tea bags or ointment (such as Bagbalm or A&D) to any cracks.";
    } else if (input == "How do I identify breast infection and how to deal with it?") {
        return "Mastitis, or breast infection, causes a red, warm and painful mass associated with a temperature over 100.5°F. Should this develop, contact our office immediately. The usual treatment is antibiotics and hot packs. Continue to breastfeed to decrease the chance of an abscess developing.";
    } else if (input == "What is postpartum depression and “baby blues”?") {
        return "Many physical and emotional changes occur during and after pregnancy. These changes can leave you feeling sad, anxious, afraid or confused. These feelings are called the “baby blues” and usually start right after the baby is born and go away within a week. However, for some women, these feelings do not go away and they may get worse. This is called postpartum depression and occurs in about 10% of all postpartum women.";
    } else if (input == "When can I start exercising and when will I return to my usual weight?") {
        return "During birth, you lose approximately 12 to 14 pounds. However, this may still leave some extra weight depending on the amount gained during pregnancy. Losing this weight takes time. It takes most moms 8 to 12 months to return to their normal weight. The key to slow and natural weight loss is healthy eating and regular exercise. You can usually start exercising after six weeks. Walking and gentle stretching and strengthening exercises are the best exercises to start with.";
    } else if (input == "what about contraception?") {
        return "Postpartum contraceptive options include but are not limited to birth control pills, patches, condoms, IUDs (Mirena and ParaGard), Nexplanon, vaginal contraceptive ring (NuvaRing), and permanent sterilization (Bilateral Tubal Ligation or Vasectomy). Most of these are safe even if breastfeeding.";
    }

    //periods
    else if (input == "What is a period and why do we have them?") {
        return "A period is when a woman’s body releases tissue it no longer needs. This tissue comes from the uterus, which is where a baby (fetus) can develop in the female body. Every month or so, the uterus lining gets thicker to prepare for a fertilized egg if the woman becomes pregnant. If the egg doesn’t get fertilized, that lining is released from the body as blood through the vagina. This monthly process is called menstruation or a period.";
    } else if (input == "What does a period feel like?") {
        return "The actual flow of your period doesn’t feel like much when it’s happening. Chances are, you won’t even feel it coming out. When you actually start your period, you may feel some dampness in your private area.";
    } else if (input == "Does having your period hurt?") {
        return "Menstruation itself doesn’t hurt, but some girls and women get cramps or other symptoms during their periods that may be uncomfortable. This is typically due to the hormones your body releases during menstruation that cause the uterus to contract so it can shed it’s lining.";
    } else if (input == "I got my period and I haven't told my mom yet. It's really hard for me to talk about things like this. I have a lot of questions. What should I do?") {
        return "Lots of girls have the same concern. Your mom will be one of your best resources when you have questions about your period, so try to start the conversation yourself! Know that she will be understanding and helpful. Actually, she may be your best friend during this time in your life. Still don’t feel like you can talk to your mom? An aunt, friend’s mom or older sister are also great women to ask.";
    } else if (input == "Is it OK to have a bath or shower when I have my period? ") {
        return "Yep! During your period, it’s important to keep yourself fresh and clean. They’re a simple way to stay feeling feminine and fresh. Always Incredibly Thin Liners and Always Xtra Protection Liners are great choices for daily liners that help you feel dry, fresh and confident every day.";
    } else if (input == "Is there anything I won’t be able to do when I have my period? ") {
        return "Your period doesn’t have to stop you from doing things you usually do. You can still go to school, help at home, see your friends, play sports and do all the things you’d normally do.";
    } else if (input == "How much blood do I lose during my period?") {
        return "Most girls lose about 1/4 cup of menstrual fluid during their periods (mostly in the first few days). Not to worry, though — your body makes up for it.";
    } else if (input == "When will I stop having my period for good?") {
        return "Women get periods until menopause, which is when menstruation and the ability to have children stops. In most women, it usually happens in their late 40sor early 50s. But menopause can happen earlier or later. Some women may stop menstruation by the time they're 35 years old, and others may not stop until their late 50s.";
    } else if (input == "What should we avoid eating during periods?") {
        return "Spicy food, refined grains, coffee, alcohol, red meat, high-fat foof etc;";
    } else if (input == "How to stop period cramps") {
        return "Drink more water, do small exercises, avoid outside foodlike spicy ones, apply heat. And concentrate on your and don't focus on the pains. You'll be alright!";
    } else {
        return "Visit a nearby gynacologist/Doctor for more help. Or come out with some other question. We would be pleased to help you.."
    }

    // stable mental health


}