import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
// import { HomePage } from '../components/HomePage';
import { JoginiHeader } from '../components/JoginiHeader'
import { JoginiIntro } from '../components/JoginiIntro'
import { JoginiPose } from '../components/JoginiPose';
import logoYoga from '../img/yoga-pose.jpg'
import { Letenky } from '../components/Letenky';

// document.querySelector('#root').innerHTML = render(
//   <div className="container">
//      <HomePage content="Tady bude můj super obsah stránky" title="Moje super stránka" user="Radim" author="Filip 2" />
//   </div>
// );

document.querySelector('#root').innerHTML = render(
  <div className="container">
     <JoginiHeader title="Jogíni" />
     <JoginiIntro heading="Vítejte mezi jogíny" 
     text ="Naše lekce jsou zaměřeny na potřeby klientů, kteří mají odvahu zkusit
         něco nového. Cvičíme v pomalém tempu s podrobným slovním doprovodem.
         Postupně se seznámíte se základními principy jógy, jak přístupovat k
         sobě i ostatním. Krok za krokem objevíte a dostanete pod kontrolu
         svoje tělo, pocity a emoce." />
      <JoginiPose imgUrl={logoYoga} />

    <Letenky title="Letenky" />
  </div>
);
