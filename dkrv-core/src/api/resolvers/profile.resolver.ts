import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Logger } from '@nestjs/common';
import { ProfileStore, ServiceResponse, ProductStore } from '../../services';
import { ProfileInput, Profile, File } from '../types';

@Resolver(of => Profile)
export class ProfileResolver {
  constructor(private profileStore: ProfileStore) {}

  @Query(returns => [Profile])
  async Profiles(): Promise<Profile[]> {
    const response: ServiceResponse = await this.profileStore.search({});
    Logger.log(response);
    return response.payload || [];
  }

  @Query(returns => Profile)
  async getProfile(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.profileStore.get(id);
    Logger.log(response);
    return response.payload;
  }

  @Mutation(returns => String)
  async createProfile(@Args('Profile') profile: ProfileInput) {
    Logger.log(profile);
    const response: ServiceResponse = await this.profileStore.add(Profile);
    Logger.log(response);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }
}
