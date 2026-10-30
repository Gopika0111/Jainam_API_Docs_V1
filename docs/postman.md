---

title: Postman Scrips

---

# Postman Scrips

## How to download and use Postman

* Go to [https://www.getpostman.com/downloads/](https://www.postman.com/downloads/){:  target="_blank"} and choose your desired platform among Mac,Windows or Linux.
* To import postman scripts [https://www.getpostman.com/downloads/](https://www.postman.com/downloads/){: target="_blank"}
* HTTP Request - Clicking this would display a dropdown list of different requests such as GET, POST, COPY, DELETE, etc. In    testing, the most commonly used requests are   GET and POST.
* Params - This is where you will write parameters needed for a request such as key values.
* Headers - You can set headers such as content type JSON depending on the needs of the organization.
* Body - This is where one can customize details in a request commonly used in POST request.
* Tests - These are scripts executed during the request. It is important to have tests as it sets up checkpoints to verify if response status is ok, retrieved data is as expected and other tests

__Working with GET Requests__

* Set your HTTP request to GET.
* In the request URL field, input link
* Click Send
* You will see 200 OK Message 

__Working with POST Requests__

* Set your HTTP request to POST.
* Input the same link in request url:
* switch to the Body tab
* In Body, click raw and select JSON

__Pre-filled sample post man scripts can be downloaded here__

* Open the Post man
* Click the import button
* Select the import file or Drag and drop the file in the box

<!-- __Postman Sample__ -->

<!-- [Download All ](/jainam_API_postman/Jainam_API_Users_postman Collection.zip){ .DLbtn } -->

<!-- <button class="DLbtn" id="downloadBtn">Download Files</button> -->

[Download ZIP](Jainam_Collections/Jainam_collections.zip){ .DLbtn }


<!-- <script>
        document.getElementById('downloadBtn').addEventListener('click', function() {
            const files = [
                '/Jainam_Collections/JAINAM_ODIN.postman_environment.json',
                '/Jainam_Collections/JAINAM_TR.postman_environment.json',
                '/Jainam_Collections/Middleware-Jainam.postman_collection.json'
            ];
            
            // Create and trigger downloads sequentially
            function downloadSequentially(index) {
                if (index >= files.length) return;
                
                const a = document.createElement('a');
                a.href = files[index];
                a.download = files[index].split('/').pop();
                
                // Add to DOM, trigger click, then remove
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                
                // Queue the next download with a slight delay
                setTimeout(() => downloadSequentially(index + 1), 100);
            }
            
            // Start the download sequence
            downloadSequentially(0);
        });
    </script> -->
