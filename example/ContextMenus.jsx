import React from 'react'
import Code from './Code'
import ContextMenu from '../components/ContextMenu'
import Logout from '../components/icons/Logout'

export default function ContextMenus () {
  return (
    <div>
      <Code>
        <ContextMenu>
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
        </ContextMenu>
      </Code>

      <Code>
        <div style={{background: '#0074c8', padding: 20}}>
          <ContextMenu>
            <ContextMenu.Link href='#buttons'>Buttons</ContextMenu.Link>
            <ContextMenu.Link href='#icons'>Icons</ContextMenu.Link>
            <ContextMenu.Link href='#labels'>Labels</ContextMenu.Link>
            <ContextMenu.Separator />
            <ContextMenu.Link href='#'>
              <ContextMenu.Icon><Logout /></ContextMenu.Icon>
              Logout
            </ContextMenu.Link>
          </ContextMenu>
        </div>
      </Code>
    </div>
  )
}
