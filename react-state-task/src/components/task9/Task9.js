import React, {useState} from 'react'
import './task9.css'

const Task9 = () => {

    const [firstAccordion, setFirstAccordion ] = useState(false)
    const [secondAccordion, setSecondAccordion ] = useState(false)
    const [thirdAccordion, setThirdAccordion ] = useState(false)
    return (
        <div>
            <ul className='list'>
                <li onClick={ () =>{setFirstAccordion(!firstAccordion); setSecondAccordion(false); setThirdAccordion(false);}  }>Панель #1</li>

                <p style={ {display: `${ firstAccordion ? 'block' : 'none' }` } } >
                 التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن
                </p> 

                <li onClick={ () =>{setFirstAccordion(false); setSecondAccordion(!secondAccordion); setThirdAccordion(false);}  }>Панель #2</li>
                
                <p style={ {display: `${ secondAccordion ? 'block' : 'none' }` } } >
                 也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。在1960年代，”Leatraset”公司发布了印
                </p>
                
                <li onClick={ () =>{setFirstAccordion(false); setSecondAccordion(false); setThirdAccordion(!thirdAccordion);}  }>Панель #3</li>
                
                <p style={ { display: `${ thirdAccordion ? 'block' : 'none' }` } } >
                छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया, जब एक अज्ञात मुद्रक ने नमूना लेकर एक नमूना किताब बनाई. यह न केवल पाँच सदियों से जीवित रहा बल्कि इसने इलेक्ट्रॉनिक मीडिया में छलांग लगाने के बाद भी मूलतः अपरिवर्तित रहा. यह 1960 के दशक में Letraset Lorem Ipsum अंश युक्त पत्र के रिलीज के साथ लोकप्रिय हुआ, और हाल ही में Aldus PageMaker Lorem Ipsum के संस्करणों सहित तरह डेस्कटॉप प्रकाशन सॉफ्टवेयर के साथ अधिक प्रचलित हुआ.
                </p>
            </ul>
        </div>
    )
}

export default Task9
