import jss from 'jss'
import preset from 'jss-preset-default'
import color from 'color'
import component from './component';
const cssnano = require('cssnano');
jss.setup(preset());

// console.log("extend",extend);

class S1 extends component{
  constructor(){
    super();
    this.fontSize = 12;
    this['&:hover'] = {
      background: 'blue'
    };
  }
}

class S2 extends component{
  constructor(){
    super();
    this.backgroundColor = 'red';
  }
}

const styles = {
    button: {
        fontSize: 12,
        composes: ['btn', 'btn-primary'],
        '&:hover': {
          background: 'blue'
        }
      },
      ctaButton: {
        extend: 'button',
        '&:hover': {
          background: color('blue')
            .darken(0.3)
            .hex()
        }
      },
      '@media (min-width: 1024px)': {
        button: {
          width: 200
        }
      }
};

const s1 = new S1();
const s2 = new S2();
const sss = jss.createStyleSheet({s1,s2});
console.log("jss.createStyleSheet({s1,s2}).attach()",sss);

const { classes: c1  } = jss.createStyleSheet({s1,s2}).attach();
const { classes } = jss.createStyleSheet(styles).attach()
document.body.innerHTML = `
  <button class="${c1.s1}">Button</button>
  <button class="${c1.s2}">CTA Button</button>
`