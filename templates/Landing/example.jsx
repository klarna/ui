import React from 'react'
import Landing from './'
import Wrapper from '../Wrapper'

const DemoIcon = () => (
  <svg width='100px' height='150px' viewBox='0 0 100 150'>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-39, 0)'>
        <g transform='translate(39, 0)'>
          <rect fill='#C3CFE2' x='0' y='0' width='100' height='150' rx='10'></rect>
          <rect fill='#FFFFFF' x='7' y='16' width='87' height='114' rx='2.5'></rect>
          <rect fill='#EFF4F9' x='7' y='16' width='13' height='114' rx='2.5'></rect>
          <rect fill='#EFF4F9' x='5' y='16' width='5' height='114' rx='2.5'></rect>
          <path d='M50,5 C48.344,5 47,6.344 47,8 C47,9.656 48.344,11 50,11 C51.656,11 53,9.656 53,8 C53,6.344 51.656,5 50,5' id='Camera' fill='#FFFFFF'></path>
          <path d='M50,143 C48.343,143 47,141.657 47,140 C47,138.343 48.343,137 50,137 C51.657,137 53,138.343 53,140 C53,141.657 51.657,143 50,143 M50,135 C47.239,135 45,137.239 45,140 C45,142.761 47.239,145 50,145 C52.761,145 55,142.761 55,140 C55,137.239 52.761,135 50,135' fill='#C3CFE2'></path>
          <g transform='translate(25, 83)' fill='#EFF4F9'>
            <path d='M0,2.50098635 C0,1.11972973 1.11442478,0 2.49661453,0 L47.5033855,0 C48.8822276,0 50,1.12893087 50,2.50098635 L50,12 L0,12 L0,2.50098635 Z M2,2.99703014 C2,2.4463856 2.45527816,2 3.00355521,2 L46.9964448,2 C47.550693,2 48,2.45303631 48,2.99703014 L48,10 L2,10 L2,2.99703014 Z' id='Border'></path>
            <path d='M0,12.5009863 C0,11.1197297 1.11442478,10 2.49661453,10 L47.5033855,10 C48.8822276,10 50,11.1289309 50,12.5009863 L50,22 L0,22 L0,12.5009863 Z M2,12.9970301 C2,12.4463856 2.45527816,12 3.00355521,12 L46.9964448,12 C47.550693,12 48,12.4530363 48,12.9970301 L48,20 L2,20 L2,12.9970301 Z' id='Border' transform='translate(25, 16) scale(1, -1) translate(-25, -16) '></path>
          </g>
          <path d='M55,66.0001251 L61,66.0001251 L61,53.0001251 L55,53.0001251 L55,66.0001251 Z M47,66.0001251 L53,66.0001251 L53,53.0001251 L47,53.0001251 L47,66.0001251 Z M39,66.0001251 L45,66.0001251 L45,53.0001251 L39,53.0001251 L39,66.0001251 Z M63,66 L63,53.0001251 L65,53.0001251 C65.552,53.0001251 66,52.5521251 66,52.0001251 C66,51.4481251 65.552,51.0001251 65,51.0001251 L64,51.0001251 L51.25,40.4391251 C50.5599976,39.8541251 49.4400024,39.8531251 48.75,40.4391251 L36,51.0001251 L35,51.0001251 C34.448,51.0001251 34,51.4481251 34,52.0001251 C34,52.5521251 34.448,53.0001251 35,53.0001251 L37,53.0001251 L37,66 L36.0017433,66 C34.8892617,66 34,66.8954305 34,68 C34,69.1122704 34.896211,70 36.0017433,70 L63.9982567,70 C65.1107383,70 66,69.1045695 66,68 C66,66.8877296 65.103789,66 63.9982567,66 L63,66 Z' fill='#C3CFE2'></path>
        </g>
      </g>
    </g>
  </svg>
)

export default {
  title: 'Landing',
  variations: [{
    title: 'Landing Dialog',
    require: 'import Landing from \'@klarna/ui/templates/Landing\'',

    Regular: [
      <Wrapper archetype='dialog'>
        <Landing
          illustration={<DemoIcon />}
          labels={{
            title: 'Welcome to the site',
            summary: 'Chia williamsburg subway tile vaporware, live-edge kinfolk cardigan prism deep v retro seitan.',
            accept: 'Continue',
            cancel: 'Go back'
          }}
          onAccept={() => console.log('accept')}
          onCancel={() => console.log('cancel')}
        />
      </Wrapper>
    ]
  }]
}
