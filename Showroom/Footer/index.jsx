import React from 'react'
import * as Button from '../../Button'
import K from '../K'
import * as Paragraph from '../../Paragraph'
import * as Title from '../../Title'
import styles from './styles.scss'

export default function Footer () {
  return (
    <footer className={styles.footer}>
      <div className={styles.copyright}>
        <K />

        <div className={styles.copy}>
          <Title.Secondary>
            Klarna UI Components
          </Title.Secondary>

          <Paragraph.Legal className={styles.copyLegal} color='blue'>
            Copyright © 2015-2016 Klarna AB. Version 1.0.0.
          </Paragraph.Legal>
        </div>
      </div>

      <Button.Primary
        size='small'
        className={styles.getInTouch}
        onClick={() => window.open('https://github.com/klarna/ui/issues')}>
        Get in touch
      </Button.Primary>
    </footer>
  )
}
