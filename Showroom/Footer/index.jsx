import React from 'react'
import * as Button from '../../Button'
import K from '../K'
import Link from '../../Link'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import {version} from '../../package.json'

import styles from './styles.scss'

export default function Footer () {
  return <footer className={styles.footer}>
    <div className={styles['footer__copyright']}>
      <K className={styles['footer__K']} />

      <div className={styles['footer__copy']}>
        <Title.Secondary
          className={styles['footer__brand']}>
          Klarna UI Components
        </Title.Secondary>

        <Paragraph.Legal
          className={styles['footer__legal']}>
          Copyright © 2015-2016 <Link
            target='_blank'
            href='https://klarna.com'>Klarna AB</Link>. Version <Link
              target='_blank'
              href={`https://github.com/klarna/ui/releases/tag/v${version}`}>{version}</Link>
        </Paragraph.Legal>
      </div>
    </div>

    <Button.Primary
      size='small'
      className={styles['footer__get-in-touch']}
      href='https://github.com/klarna/ui/issues'
      target='_blank'>
      Get in touch
    </Button.Primary>
  </footer>
}
