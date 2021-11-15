'use strict';

var index = require('./index-77c9c354.js');
var serdePlugin = require('./serdePlugin-9ae9bada.js');
require('./index-5e126dca.js');
require('./_commonjsHelpers-429052b6.js');

/**
 * <p>Adds an object to a bucket. You must have WRITE permissions on a bucket to add an object
 *          to it.</p>
 *
 *
 *          <p>Amazon S3 never adds partial objects; if you receive a success response, Amazon S3 added the
 *          entire object to the bucket.</p>
 *
 *          <p>Amazon S3 is a distributed system. If it receives multiple write requests for the same object
 *          simultaneously, it overwrites all but the last object written. Amazon S3 does not provide object
 *          locking; if you need this, make sure to build it into your application layer or use
 *          versioning instead.</p>
 *
 *          <p>To ensure that data is not corrupted traversing the network, use the
 *             <code>Content-MD5</code> header. When you use this header, Amazon S3 checks the object
 *          against the provided MD5 value and, if they do not match, returns an error. Additionally,
 *          you can calculate the MD5 while putting an object to Amazon S3 and compare the returned ETag to
 *          the calculated MD5 value.</p>
 *          <note>
 *             <p> The <code>Content-MD5</code> header is required for any request to upload an object
 *             with a retention period configured using Amazon S3 Object Lock. For more information about
 *             Amazon S3 Object Lock, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/object-lock-overview.html">Amazon S3 Object Lock Overview</a>
 *             in the <i>Amazon S3 User Guide</i>. </p>
 *          </note>
 *
 *
 *          <p>
 *             <b>Server-side Encryption</b>
 *          </p>
 *          <p>You can optionally request server-side encryption. With server-side encryption, Amazon S3 encrypts
 *          your data as it writes it to disks in its data centers and decrypts the data
 *          when you access it. You have the option to provide your own encryption key or use AWS
 *          managed encryption keys (SSE-S3 or SSE-KMS). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingServerSideEncryption.html">Using Server-Side
 *             Encryption</a>.</p>
 *          <p>If you request server-side encryption using AWS Key Management Service (SSE-KMS), you can enable
 *          an S3 Bucket Key at the object-level. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/bucket-key.html">Amazon S3 Bucket Keys</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *          <p>
 *             <b>Access Control List (ACL)-Specific Request
 *          Headers</b>
 *          </p>
 *          <p>You can use headers to grant ACL- based permissions. By default, all objects are
 *          private. Only the owner has full access control. When adding a new object, you can grant
 *          permissions to individual AWS accounts or to predefined groups defined by Amazon S3. These
 *          permissions are then added to the ACL on the object. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html">Access Control List
 *             (ACL) Overview</a> and <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-using-rest-api.html">Managing ACLs Using the REST
 *             API</a>. </p>
 *
 *          <p>
 *             <b>Storage Class Options</b>
 *          </p>
 *          <p>By default, Amazon S3 uses the STANDARD Storage Class to store newly created objects. The
 *          STANDARD storage class provides high durability and high availability. Depending on
 *          performance needs, you can specify a different Storage Class. Amazon S3 on Outposts only uses
 *          the OUTPOSTS Storage Class. For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html">Storage Classes</a> in the
 *          <i>Amazon S3 User Guide</i>.</p>
 *
 *
 *          <p>
 *             <b>Versioning</b>
 *          </p>
 *          <p>If you enable versioning for a bucket, Amazon S3 automatically generates a unique version ID
 *          for the object being stored. Amazon S3 returns this ID in the response. When you enable
 *          versioning for a bucket, if Amazon S3 receives multiple write requests for the same object
 *          simultaneously, it stores all of the objects.</p>
 *          <p>For more information about versioning, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/AddingObjectstoVersioningEnabledBuckets.html">Adding Objects to
 *             Versioning Enabled Buckets</a>. For information about returning the versioning state
 *          of a bucket, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_GetBucketVersioning.html">GetBucketVersioning</a>. </p>
 *
 *
 *          <p class="title">
 *             <b>Related Resources</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_CopyObject.html">CopyObject</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_DeleteObject.html">DeleteObject</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3"; // ES Modules import
 * // const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3"); // CommonJS import
 * const client = new S3Client(config);
 * const command = new PutObjectCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutObjectCommandInput} for command's `input` shape.
 * @see {@link PutObjectCommandOutput} for command's `response` shape.
 * @see {@link S3ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PutObjectCommand extends serdePlugin.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(serdePlugin.getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(index.getSsecPlugin(configuration));
        this.middlewareStack.use(index.getBucketEndpointPlugin(configuration));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "S3Client";
        const commandName = "PutObjectCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: index.PutObjectRequest.filterSensitiveLog,
            outputFilterSensitiveLog: index.PutObjectOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return index.serializeAws_restXmlPutObjectCommand(input, context);
    }
    deserialize(output, context) {
        return index.deserializeAws_restXmlPutObjectCommand(output, context);
    }
}

exports.PutObjectCommand = PutObjectCommand;
