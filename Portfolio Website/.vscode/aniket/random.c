#include<stdio.h>
int main(){
    int arr[6]={1,2,5,6,9,13};
    for(int i =0; i<6;i++){
        if(i%2==0){ arr[i] = arr[i] + 10;}
        if(i%2!=0) {arr[i] = arr[i]*2;}
    }
    for(int j = 0;j<6;j++){
        printf("%d\n",arr[j]);
    }
    return 0;
}