import React from 'react'
import Code from '../Code'
import * as ContextMenu from '../ContextMenu'
import Logout from '../icons/Logout'

export default function ContextMenus () {
  return (
    <div>
      <Code>
        <ContextMenu.Main>
          <ContextMenu.Link href='#buttons'>Buttons</ContextMenu.Link>
          <ContextMenu.Link href='#icons'>Icons</ContextMenu.Link>
          <ContextMenu.Link href='#labels'>Labels</ContextMenu.Link>
          <ContextMenu.Item href='#'>
            <form>Custom form</form>
          </ContextMenu.Item>
          <ContextMenu.Separator />
          <ContextMenu.Link href='#'>
            <ContextMenu.Icon><Logout /></ContextMenu.Icon>
            Logout
          </ContextMenu.Link>
        </ContextMenu.Main>
      </Code>

      <Code>
        <div style={{background: '#0074c8', padding: 20}}>
          <ContextMenu.Main>
            <ContextMenu.Link href='#buttons'>Buttons</ContextMenu.Link>
            <ContextMenu.Link href='#icons'>Icons</ContextMenu.Link>
            <ContextMenu.Link href='#labels'>Labels</ContextMenu.Link>
            <ContextMenu.Separator />
            <ContextMenu.Link href='#'>
              <ContextMenu.Icon><Logout /></ContextMenu.Icon>
              Logout
            </ContextMenu.Link>
          </ContextMenu.Main>
        </div>
      </Code>
    </div>
  )
}
