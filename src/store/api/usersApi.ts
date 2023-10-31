import { createApi } from '@reduxjs/toolkit/query/react';
import { db } from '../../firebase-config';
import { addDoc, collection, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseBaseQuery = async ({ baseUrl, url, method, body }) => {
    switch (method) {
        case 'GET':
            const snapshot = await getDocs(collection(db, url));
            const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            return { data };

        case 'POST':
            const docRef = await addDoc(collection(db, url), body);
            return { data: { id: docRef.id, ...body } };

        case 'DELETE':
            await deleteDoc(doc(db, url, body));
            return { data: `Deleted id ${body}`};

        default:
            throw new Error(`Unhandled method ${method}`);
    }
};

export const usersApi = createApi({
  reducerPath: 'usersApi',
    baseQuery: firebaseBaseQuery,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    endpoints: (builder) => ({
      createUser: builder.mutation({
        query: ({ user }) => ({
            baseUrl: '',
            url: 'users',
            method: 'POST',
            body: user
        }),
      }),
      getUsers: builder.query<any,void>({
        query: () => ({
          baseUrl: '',
          url: 'users',
          method: 'GET',
          body: '',
        }),
      }),
      deleteUser: builder.mutation({
        query: ( id ) => ({
          baseUrl: '',
            url: 'users',
            method: 'DELETE',
            body: id
        })
      })
    }),
});

export const {
              useCreateUserMutation,
              useGetUsersQuery,
              useDeleteUserMutation
            } = usersApi;
