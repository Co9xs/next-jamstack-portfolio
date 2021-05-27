import {
  AngularIcon,
  GitHubLogo,
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
} from '@/components'
import { skills } from '@/utils'

type Props = {
  name: typeof skills[number]
}

export const SkillIcon: React.VFC<Props> = (props) => {
  const { name }= props
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
    return <GitHubLogo fill="var(--colors-white)"/>
  case 'GitLab':
    return <GitLabIcon />
  case 'Next':
    return <NextIcon fill="var(--colors-white)"/>
  case 'Vercel':
    return <VercelIcon fill="var(--colors-white)"/>
  case 'Nuxt':
    return <NuxtIcon />
  case 'Storybook':
    return <StorybookIcon fill="var(--colors-white)"/>
  case 'Docker':
    return <DockerIcon />
  default:
    return null;
}
} 