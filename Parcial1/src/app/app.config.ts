import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient() ,provideFirebaseApp(() => initializeApp({"projectId":"parcial1-a8c0d","appId":"1:1096680364558:web:a81604c73f9f2a2dfdfa5f","storageBucket":"parcial1-a8c0d.appspot.com","apiKey":"AIzaSyAMsF8D7Wj8vWHgq1m1ZKy5IqXa4CbMpcI","authDomain":"parcial1-a8c0d.firebaseapp.com","messagingSenderId":"1096680364558"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"parcial1-a8c0d","appId":"1:1096680364558:web:a81604c73f9f2a2dfdfa5f","storageBucket":"parcial1-a8c0d.appspot.com","apiKey":"AIzaSyAMsF8D7Wj8vWHgq1m1ZKy5IqXa4CbMpcI","authDomain":"parcial1-a8c0d.firebaseapp.com","messagingSenderId":"1096680364558"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideStorage(() => getStorage())]
};
