import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

import { Logger } from '@nestjs/common';
import { Profil } from '../objects';
import { ProfilInput } from '../inputs';
import { ProfilStore, ProductStore } from '../../services';
import { ServiceResponse } from '../../types/common.defs';
import { File } from '../objects';

@Resolver(of => Profil)
export class ProfilResolver {
  constructor(
    private profilStore: ProfilStore
  ) {}

  @Query(returns => [Profil])
  async profils(): Promise<Profil[]> {
    const response: ServiceResponse = await this.profilStore.search({});
    Logger.log(response);
    return response.payload || [];
  }

  @Query(returns => Profil)
  async getProfil(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.profilStore.get(id);
    Logger.log(response);
    return response.payload;
  }

  @Mutation(returns => String)
  async createProfil(@Args('profil') profil: ProfilInput) {
    Logger.log(profil);
    const response: ServiceResponse = await this.profilStore.add(profil);
    Logger.log(response);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }
}
