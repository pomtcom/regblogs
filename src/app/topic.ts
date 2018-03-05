export class Topic {
    id: number;
    topicName: string;
    thumbnail: string;
    shortDescrp: string;

}

export const TOPICS: Topic[] = [];

export interface Blogs {
  publish_no: number;
  topic_name: string;
  thumbnail: string;
  short_description: string;
  body_content: string;
  hover: false;
}





// export const TOPICS: Topic[] = [
//     {
//         id: 1,
//         topicName: 'ทำงานมา 4 ปี ค้นพบอะไรบ้าง? ผมจะเล่าให้ฟัง',
//         thumbnail: '../../assets/images/topic_1.jpg',
//         shortDescrp: 'เนื่องด้วยผมครบรอบการทำงานเป็นมนุษย์เงินเดือนมา 4 ปี วันนี้จึงอยากมาเล่าให้ทุกคนฟังครับ ว่าผมค้นพบ และเห็นสัจธรรมในชีวิตอะไรบ้าง',
//         // shortDescrp: '<p style="color:red;">TEST TOPICss is working or not</p>'
//
//     },
//     {
//         id: 2,
//         topicName: 'มาสร้าง private bitcoin wallet ของตัวเองกันเถอะ',
//         thumbnail: '../../assets/images/topic_2.jpg',
//         shortDescrp: 'จากราคา bitcoin ที่พุ่งขึ้นเอาๆ คงไม่ดีแน่ถ้าเรายังเก็บ bitcoin ของเราไว้ที่เว็ปเทรด'
//     },
//     {
//         id: 3,
//         topicName: 'มาเรียน Golang กันเถอะ',
//         thumbnail: '../../assets/images/topic_3.jpg',
//         shortDescrp: 'แนะนำภาษา Go programming เบื้องต้น'
//     },
//     {
//         id: 4,
//         topicName: 'เครื่องล้างรถหยอดเหรียญ',
//         thumbnail: '../../assets/images/topic_4.jpg',
//         shortDescrp: 'xxx'
//     },
//     {
//         id: 5,
//         topicName: 'เขียนอะไรบ้างสิ?',
//         thumbnail: '../../assets/images/topic_others.jpg',
//         shortDescrp: 'xxx'
//     },
//     {
//         id: 6,
//         topicName: 'เขียนอะไรบ้างสิ',
//         thumbnail: '../../assets/images/topic_others.jpg',
//         shortDescrp: 'xxx'
//     },
//
// ];
