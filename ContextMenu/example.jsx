import React from 'react'
import * as ContextMenu from '../ContextMenu'
import Logout from '../icons/Logout'

export default {
  title: 'ContextMenu',
  icon: 'Navigation',
  examples: {
    require: 'import * as ContextMenu from \'@klarna/ui/ContextMenu\'',
    Regular: (
      <ContextMenu.Main>
        <ContextMenu.Link>Buttons</ContextMenu.Link>
        <ContextMenu.Link>Icons</ContextMenu.Link>
        <ContextMenu.Link>Labels</ContextMenu.Link>
        <ContextMenu.Item>
          <form>Custom form</form>
        </ContextMenu.Item>
        <ContextMenu.Separator />
        <ContextMenu.Link>
          <ContextMenu.Icon><Logout /></ContextMenu.Icon>
          Logout
        </ContextMenu.Link>
      </ContextMenu.Main>
    ),

    'Over blue background': (
      <div style={{background: '#0074c8', padding: 20}}>
        <ContextMenu.Main>
          <ContextMenu.Link>Buttons</ContextMenu.Link>
          <ContextMenu.Link>Icons</ContextMenu.Link>
          <ContextMenu.Link>Labels</ContextMenu.Link>
          <ContextMenu.Separator />
          <ContextMenu.Link>
            <ContextMenu.Icon><Logout /></ContextMenu.Icon>
            Logout
          </ContextMenu.Link>
        </ContextMenu.Main>
      </div>
    )
  }
}
