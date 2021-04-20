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
  WebpackIcon,
  DockerIcon
} from './icons'
import { skills } from '@/utils'

type Props = typeof skills[number]

export const SkillIcon: React.VFC<Props> = (props) => {
  const { name } = props;
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
  case 'GitLab':
    return <GitLabIcon />
  case 'Next':
    return <NextIcon />
  case 'Vercel':
    return <VercelIcon />
  case 'Nuxt':
    return <NuxtIcon />
  case 'Storybook':
    return <StorybookIcon />
  case 'Docker':
    return <DockerIcon />
  default:
    return null;
}
} 