import {
  AngularIcon,
  GitHubIcon,
  GitLabIcon,
  JavaScriptIcon,
  JQueryIcon,
  LaravelIcon,
  NextIcon,
  NuxtIcon,
  PHPIcon,
  ReactIcon,
  ReactiveXIcon,
  SlackIcon,
  StorybookIcon,
  TypeScriptIcon,
  VercelIcon,
  VueIcon,
  WebpackIcon
} from './icons'

export const SkillIcon = ({name}) => { 
  switch (name) {
  case 'JavaScript':
    return <JavaScriptIcon/>
  case 'TypeScript':
    return <TypeScriptIcon />
  case 'Angular':
    return <AngularIcon />
  case 'Vue':
    return <VueIcon />
  case 'React':
    return <ReactIcon />
  case 'jQuery':
    return <JQueryIcon />
  case 'ReactiveX':
    return <ReactiveXIcon />
  case 'PHP':
    return <PHPIcon />
  case 'Laravel':
    return <LaravelIcon />
  case 'Webpack':
    return <WebpackIcon />
  case 'Slack':
    return <SlackIcon />
  case 'GitHub':
    return <GitHubIcon />
  case 'Gitlab':
    return <GitLabIcon />
  case 'Next':
    return <NextIcon />
  case 'Vercel':
    return <VercelIcon />
  case 'Nuxt':
    return <NuxtIcon />
  case 'Storybook':
    return <StorybookIcon />
  default:
    console.log(`Sorry, we are out of ${name}.`);
}
} 