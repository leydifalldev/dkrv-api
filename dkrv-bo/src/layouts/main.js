import React from 'react';
import { MainTopNav, MainSideNav } from '../components/Nav';

export const MainLayout = () => (
  <div class="row">
      <div class="col s2">
        <MainSideNav/>
      </div>
      <div class="col s10 main-container">
        <MainTopNav/>
      </div>
    </div>
) 