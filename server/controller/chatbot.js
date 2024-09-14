const dialogflow = require('dialogflow');
const googleAuth = require('google-oauth-jwt');
const projectId = "adiya-cab";
const mongoose = require('mongoose');
const Registration = require('../models/Registration');

const sessionId = "114356150690862952608"
const languageCode =  "en-US"

const credentials = {
    client_email: "adiya-cab@appspot.gserviceaccount.com",
    private_key: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIqhoVRHJK2TmQ\nJEvpeNK5tJoSPaPLzWslmTQ6hjNwXgubg2w5UyFwOmgk6LfX2Qj+z2jhXgkgXJck\nXrBO8Be208o/BeWZpmSxwyZbAKTjWCIIMykYJnAayTrL8wCVxNsjdeBinvTscZIH\nlvU/MKAPOxJeT9MOYPaggNYpeAVJ9HxMWu7Y0uOaa+ETReBfHcs7zQG+1W5lzQQT\nqEfEnRrBtLZj34QaXt8CazMGilEBZojlwKrny+Y75byZDi94UhNPM62i9Y0VtNiD\nt0AdAQyaZwU0YZ7sZWNay/wlisLtW0yA9AxYTamsKtzKqTFzBS6LbuTesKuUxM0x\ntmDSUjdBAgMBAAECggEAAczk5wPyMpG4Xn6036dh3KCuMTO0YIO7Tl8NhOjnVT7C\nw+Zt9iW0yxj7Djm4TIt59S9PNZZuZofuIzlmQ48L52wHCIG5CaPgi2fA1FgxIokL\n5R7wY3MU1mivylynyLA3dx37oWbjs6thMAg+sw5woTJae9YjgqGEFPSS91RIV92B\nm8MT+N9Mx8H01L7MgUkA1vBnosX4s++gNagSMiuNFC9ai8CduzI3py23di3/lfbA\nopm5who0SkXAA9wdLeXxrsmnVcEbMU8hTBlLJKY8h2E/t8I7gMYOMjnrOvEiIiti\nq1G3l1C+mZFS1c2l1dq3hQ+W9Wq+WMa/I75jKLNEAQKBgQD0skWT5lP8kqc30aha\nh6fjGzxo4iZqg8Lx7mNZABK1o3xwdJMohjGYX5NYAldlziWiYYLpfrnSZTrIYgLj\nIEiZ+xED3Q1Y7v/mjFmWZ5uL6nXKiFragkzkGYVG2Ci8gKm0VTvn2f9sSeF325Z+\nyRx2ve3SRvvrr4TPtuXDveaTcQKBgQDR7x4tsKLBILL9adS001Im2J8mR/TnMEN6\nE7trLgLinub5srXxbeLkgSiOb4k5lYA0S3xLEEVH4DqAk0mKKWX0qAQiMbAQRQri\noOeSOSZLvRmtLAxQKrkpzIu75LwdXhm4FOlg/we+/VAvU96cPbIiIXvW8YXVAKNK\nw0r/ADVY0QKBgQDfNXdukJ5wOT68Fk3iNviYnBGhAxpT81ly4yhQ2VY3xqgO1Ogg\nATlga16223vp7AA8fYKzh9vt5lWW0IEduic//tvokE5Kn8li/wgBwQUMvpUwaO2n\ngVCuifEfTLLsMNmdHFsHBb6Pg11evjor8Tw7vMkiFYpb1cHq0EYLJkEcoQKBgG14\n8tTCmmx5X70T9e6BkAJfzcYJmeUA3v8G0SHX8Xs5f5rQHV6TfdDIpVx5Pya/Fgav\nIlaGWopbnEY2CBA6/EazYsxt+rDRQBbj7z3p/VVbe8s5AAbB8KKiXm+RnKL30hOT\nHAwPkXt/3tN/OcNhzMVNjqWMdsyXM4+l/TKyah8xAoGAJsVmnkutZHos/eMhmwGa\nwHeHDks1ZipPNr+psJlCwtqxDI9DxUdXrfPf/F/1n3a1qQN2jc4xUIRjrlzwO1xx\nTxyulC9YEWYQqkhj3eYRNatU2v0PgMk3r1dFel5YNVQHi46zmT+Xv+EoMxfCb/tP\nhY3mGTmjGokSI/rCfzj7qTs=\n-----END PRIVATE KEY-----\n",
};

const sessionClient = new dialogflow.SessionsClient({projectId, credentials});

module.exports = {
    getToken: async function() {
        return new Promise((resolve) => {
            googleAuth.authenticate(
                {
                    email: "adiya-cab@appspot.gserviceaccount.com",
                    key: "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDIqhoVRHJK2TmQ\nJEvpeNK5tJoSPaPLzWslmTQ6hjNwXgubg2w5UyFwOmgk6LfX2Qj+z2jhXgkgXJck\nXrBO8Be208o/BeWZpmSxwyZbAKTjWCIIMykYJnAayTrL8wCVxNsjdeBinvTscZIH\nlvU/MKAPOxJeT9MOYPaggNYpeAVJ9HxMWu7Y0uOaa+ETReBfHcs7zQG+1W5lzQQT\nqEfEnRrBtLZj34QaXt8CazMGilEBZojlwKrny+Y75byZDi94UhNPM62i9Y0VtNiD\nt0AdAQyaZwU0YZ7sZWNay/wlisLtW0yA9AxYTamsKtzKqTFzBS6LbuTesKuUxM0x\ntmDSUjdBAgMBAAECggEAAczk5wPyMpG4Xn6036dh3KCuMTO0YIO7Tl8NhOjnVT7C\nw+Zt9iW0yxj7Djm4TIt59S9PNZZuZofuIzlmQ48L52wHCIG5CaPgi2fA1FgxIokL\n5R7wY3MU1mivylynyLA3dx37oWbjs6thMAg+sw5woTJae9YjgqGEFPSS91RIV92B\nm8MT+N9Mx8H01L7MgUkA1vBnosX4s++gNagSMiuNFC9ai8CduzI3py23di3/lfbA\nopm5who0SkXAA9wdLeXxrsmnVcEbMU8hTBlLJKY8h2E/t8I7gMYOMjnrOvEiIiti\nq1G3l1C+mZFS1c2l1dq3hQ+W9Wq+WMa/I75jKLNEAQKBgQD0skWT5lP8kqc30aha\nh6fjGzxo4iZqg8Lx7mNZABK1o3xwdJMohjGYX5NYAldlziWiYYLpfrnSZTrIYgLj\nIEiZ+xED3Q1Y7v/mjFmWZ5uL6nXKiFragkzkGYVG2Ci8gKm0VTvn2f9sSeF325Z+\nyRx2ve3SRvvrr4TPtuXDveaTcQKBgQDR7x4tsKLBILL9adS001Im2J8mR/TnMEN6\nE7trLgLinub5srXxbeLkgSiOb4k5lYA0S3xLEEVH4DqAk0mKKWX0qAQiMbAQRQri\noOeSOSZLvRmtLAxQKrkpzIu75LwdXhm4FOlg/we+/VAvU96cPbIiIXvW8YXVAKNK\nw0r/ADVY0QKBgQDfNXdukJ5wOT68Fk3iNviYnBGhAxpT81ly4yhQ2VY3xqgO1Ogg\nATlga16223vp7AA8fYKzh9vt5lWW0IEduic//tvokE5Kn8li/wgBwQUMvpUwaO2n\ngVCuifEfTLLsMNmdHFsHBb6Pg11evjor8Tw7vMkiFYpb1cHq0EYLJkEcoQKBgG14\n8tTCmmx5X70T9e6BkAJfzcYJmeUA3v8G0SHX8Xs5f5rQHV6TfdDIpVx5Pya/Fgav\nIlaGWopbnEY2CBA6/EazYsxt+rDRQBbj7z3p/VVbe8s5AAbB8KKiXm+RnKL30hOT\nHAwPkXt/3tN/OcNhzMVNjqWMdsyXM4+l/TKyah8xAoGAJsVmnkutZHos/eMhmwGa\nwHeHDks1ZipPNr+psJlCwtqxDI9DxUdXrfPf/F/1n3a1qQN2jc4xUIRjrlzwO1xx\nTxyulC9YEWYQqkhj3eYRNatU2v0PgMk3r1dFel5YNVQHi46zmT+Xv+EoMxfCb/tP\nhY3mGTmjGokSI/rCfzj7qTs=",
                    scopes: ['https://accounts.google.com/o/oauth2/auth'],
                },
                (err, token) => {
                    resolve(token);
                },
            );
        });
    },
    textQuery: async (req ,res) => {
        const {text ,userID} = req.body;
        let sessionPath = sessionClient.sessionPath(projectId, sessionId+userID);
        let self = module.exports;
        const request = {
            session: sessionPath,
            queryInput: {
                text: {
                    text: text,
                    languageCode: languageCode,
                },
            },
            // queryParams: {
            //     payload: {
            //         data: parameters
            //     }
            // }
        };

        let responses = await sessionClient.detectIntent(request);
        responses = await self.handleAction(responses);
        res.json({
            success: true,
            data: responses,
        });
        return responses;



    },
    // eventQuery: async function(event,userID, parameters = {}) {
    //     let sessionPath = sessionClient.sessionPath(projectId, sessionId+userID);
    //     let self = module.exports;
    //     const request = {
    //         session: sessionPath,
    //         queryInput: {
    //             event: {
    //                 name: event,
    //                 parameters: structjson.jsonToStructProto(parameters), //Dialogflow's v2 API uses gRPC. You'll need a jsonToStructProto method to convert your JavaScript object to a proto struct.
    //                 languageCode: languageCode,
    //             },
    //         }
    //     };

    //     let responses = await sessionClient.detectIntent(request);
    //     responses = self.handleAction(responses);
    //     return responses;
    // },



    handleAction: function(responses){
        let self = module.exports;
        let queryResult = responses[0].queryResult;

        switch (queryResult.action) {
            case 'recommendcourses-yes':
                if (queryResult.allRequiredParamsPresent) {
                    self.saveRegistration(queryResult.parameters.fields);

                }
                break;
        }
        return responses;
    },

    saveRegistration: async function(fields){
        const registration = new Registration({
            name: fields.name.structValue.fields.name.stringValue,
            address: fields.address.stringValue,
            phone: fields.phone.stringValue,
            email: fields.email.stringValue,
            dateSent: Date.now()
        });
        try{
            let reg = await registration.save();
            console.log(reg);
        } catch (err){
            console.log(err);
        }
    }
}