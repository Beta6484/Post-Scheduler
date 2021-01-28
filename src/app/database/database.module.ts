import { NgModule } from '@angular/core';
import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

const dbConfig: DBConfig = {
  name: 'PostScheduler',
  version: 1,
  objectStoresMeta: [
    {
      store: 'schedules-status',
      storeConfig: {
        keyPath: 'id',
        autoIncrement: true
      },
      storeSchema: [
        {
          name: 'name',
          keypath: 'name',
          options: {
            unique: false
          }
        },
        {
          name: 'color',
          keypath: 'color',
          options: {
            unique: false
          }
        }
      ]
    },
    {
      store: 'schedules',
      storeConfig: {
        keyPath: 'id',
        autoIncrement: true
      },
      storeSchema: [
        {
          name: 'social_network_key',
          keypath: 'social_network_key',
          options: {
            unique: false
          }
        },
        {
          name: 'media',
          keypath: 'media',
          options: {
            unique: false
          }
        },
        {
          name: 'text',
          keypath: 'text',
          options: {
            unique: false
          }
        },
        {
          name: 'publication_date',
          keypath: 'publication_date',
          options: {
            unique: false
          }
        },
        {
          name: 'status_key',
          keypath: 'status_key',
          options: {
            unique: false
          }
        }
      ]
    },
    {
      store: 'social-networks',
      storeConfig: {
        keyPath: 'id',
        autoIncrement: true
      },
      storeSchema: [
        {
          name: 'name',
          keypath: 'name',
          options: {
            unique: false
          }
        },
        {
          name: 'icon',
          keypath: 'icon',
          options: {
            unique: false
          }
        },
        {
          name: 'status',
          keypath: 'status',
          options: {
            unique: false
          }
        },
        {
          name: 'color',
          keypath: 'color',
          options: {
            unique: false
          }
        }
      ]
    },
    {
      store: 'drafts',
      storeConfig: {
        keyPath: 'id',
        autoIncrement: true
      },
      storeSchema: [
        {
          name: 'social_network_key',
          keypath: 'social_network_key',
          options: {
            unique: false
          }
        },
        {
          name: 'media',
          keypath: 'media',
          options: {
            unique: false
          }
        },
        {
          name: 'text',
          keypath: 'text',
          options: {
            unique: false
          }
        },
        {
          name: 'publication_date',
          keypath: 'publication_date',
          options: {
            unique: false
          }
        },
        {
          name: 'status_key',
          keypath: 'status_key',
          options: {
            unique: false
          }
        }
      ]
    }
  ]
}

@NgModule({
  imports: [
    NgxIndexedDBModule.forRoot(dbConfig)
  ]
})

export class DatabaseModule {}
