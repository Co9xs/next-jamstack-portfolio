import IconJs from '../public/javascript.svg'
import IconTs from '../public/typescript.svg'
import IconPhp from '../public/php.svg'
import IconAngular from '../public/angular.svg'
import IconVue from '../public/vue.svg'
import IconReact from '../public/react.svg'
import IconLaravel from '../public/laravel.svg'
import IconJquery from '../public/jquery.svg'
import IconReactiveX from '../public/reactivex.svg'
import IconWebpack from '../public/webpack.svg'
import IconSlack from '../public/slack.svg'
import IconGithub from '../public/github.svg'
import IconGitlab from '../public/gitlab.svg'
import IconNext from '../public/nextjs.svg'
import IconNuxt from '../public/nuxt.svg'
import IconStorybook from '../public/storybook.svg'

export const Icon = ({name}) => { 
  switch (name) {
  case 'JavaScript':
    return <IconJs/>
  case 'TypeScript':
    return <IconTs />
  case 'Angular':
    return <IconAngular />
  case 'Vue':
    return <IconVue />
  case 'React':
    return <IconReact />
  case 'jQuery':
    return <IconJquery />
  case 'ReactiveX':
    return <IconReactiveX />
  case 'PHP':
    return <IconPhp />
  case 'Laravel':
    return <IconLaravel />
  case 'Webpack':
    return <IconWebpack />
  case 'Slack':
    return <IconSlack />
  case 'GitHub':
    return <IconGithub />
  case 'Gitlab':
    return <IconGitlab />
  case 'Next':
    return <IconNext />
  case 'Nuxt':
    return <IconNuxt />
  case 'Storybook':
    return <IconStorybook />
  default:
    console.log(`Sorry, we are out of ${name}.`);
}
} 