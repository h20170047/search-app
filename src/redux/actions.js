export function saveAction(data){
    console.log('In Action console')
    return {
        type: 'add',
        user:data
    }
}