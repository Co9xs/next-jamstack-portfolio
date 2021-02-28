import styled from 'styled-components'
import { WorksListItem } from './WorksListItem'

export const WorksList = () => {
  const works = [
    {
      title: 'Next Portfolio',
      date: '2021/3',
      url: '',
      languages: ['Next.js', 'microCMS', 'styled-component', 'vercel'],
      description: '現在見ているポートフォリオサイトです。microCMSを使ったJamstackなブログ機能を実装しました。'
    },
    {
      title: 'TV番組表',
      date: '2020/8',
      url: 'https://sad-varahamihira-86ce75.netlify.app/',
      languages: ['Vue', 'vue-router', 'Netlify'],
      description: 'サイバーエージェント開催のWebFrontendChallengeにて制作した番組表アプリです。APIが用意され、2日間でフロント部分の実装を行いました。'
    },
    {
      title: 'Todoist Clone',
      date: '2020/3',
      url: 'http://task-management-spa.com/',
      languages: ['Vue', 'Vuex', 'vue-router', 'Laravel', 'MySQL', 'AWS EC2', 'Docker'],
      description: 'Todoistというタスク管理アプリのクローンです。インタラクティブなUIを構築する部分に力を入れました。テストログイン機能があります。'
    },
  ]

  return (
    <WorksListBase>
      {works.map(work => (
        <WorksListItem key={work.title} work={work} />
      ))}
    </WorksListBase>
  )
}

const WorksListBase = styled.div`
`